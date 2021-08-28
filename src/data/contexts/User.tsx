import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import { IUser, IUserContext } from "../protocols/User";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  //Funções para login
  const signin = async (email: string, password: string) => {
    if (email === "" || password === "") {
      Alert.alert('OPS!', 'Algum campo esta em branco');
      return false;
    }

    const resultUsers = await AsyncStorage.getItem('@users');

    if (resultUsers !== null) {
      const users: IUser[] = JSON.parse(resultUsers);
      const resultFind = users.find(user => user.email?.includes(email));
      
      if (resultFind) {
        if (resultFind.password === password) {
          setUser(resultFind);
          return false;
        } else {
          Alert.alert('OPS!', 'Parece que não existe nenhum usuário com esse email e senha');
          return false;
        }
      }
    } else {
      Alert.alert('OPS!', 'Parece que não existe nenhum usuário com esse email e senha');
      return false;
    }
    return false;
  }

  //Funções para cadastro
  const validateFields = (name: string, email: string, password: string) => {
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if(name === "") {
      Alert.alert("OPS!", "O nome não pode ficar em branco :)")
    } else if(!regexEmail.test(email)) {
      Alert.alert("OPS!", "O Email é invalido, por favor, digite um email válido como por exemplo exemplo@exemplo.com.")
    } else if(password === "") {
      Alert.alert("OPS!", "A senha não pode ficar em branco :)")
    } else if(password.length < 6) {
      Alert.alert("OPS!", "A senha tem que possuir no mínimo 6 carateres :)")
    } else {
      registerUser(name, email, password)
    }
  }

  const registerUser = async (name: string, email: string, password: string) => {
    const resultUsers = await AsyncStorage.getItem('@users');

    var newUser: IUser = {
      name,
      password,
      email: email,
      captured: [],
      favorites: [],
      sighted: [],    
    }

    if (resultUsers !== null) {
      const users: IUser[] = JSON.parse(resultUsers);
      const resultFind = users.find(user => user.email?.includes(email));
      
      if (resultFind) {
          Alert.alert('OPS!', 'Esse email já está em uso, por favor.');
      } else {
          let concatUsers: IUser[] = [
            ...users, 
            newUser
          ]
          try {
            await AsyncStorage.setItem('@users', JSON.stringify(concatUsers));
            setUser(newUser);
            Alert.alert('Sucesso!', 'Conta criada com sucesso, login será automatico dessa vez :)');
          } catch(err) {
            Alert.alert('OPS!', 'Ocorreu um erro ao criar a sua conta, por favor, tente novamente.');
          }
      }
    } else {
      let concatUsers: IUser[] = [
        newUser
      ]
      try {
        await AsyncStorage.setItem('@users', JSON.stringify(concatUsers));
        setUser(newUser);
        Alert.alert('Sucesso!', 'Conta criada com sucesso, login será automatico dessa vez :)');
      } catch(err) {
        
        Alert.alert('OPS!', 'Ocorreu um erro ao criar a sua conta, por favor, tente novamente.');
      }
    }
  }

  return (
    <UserContext.Provider value={{ user, signin, validateFields }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;