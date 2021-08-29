import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { IDescriptionPokemon } from "../protocols/models/IUsePokemons";
import { IUser, IUserContext } from "../protocols/User";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [verified, setVerified] = useState<Boolean>(false);

  //Verificar se o usuário está logado
  useEffect(() => {
    authenticate();
  }, [])

  useEffect(() => {
    if (verified) {
      SplashScreen.hide()
    }
  }, [verified])

  const authenticate = async () => {
    const resultUser = await AsyncStorage.getItem('@user');

    if (resultUser !== null) {
      setUser(JSON.parse(resultUser));
    }
    setVerified(true);
  }

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
          await AsyncStorage.setItem('@user', JSON.stringify(resultFind));
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
  //Função para validar campos
  const validateFields = (name: string, email: string, password: string) => {
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (name === "") {
      Alert.alert("OPS!", "O nome não pode ficar em branco :)")
    } else if (!regexEmail.test(email)) {
      Alert.alert("OPS!", "O Email é invalido, por favor, digite um email válido como por exemplo exemplo@exemplo.com.")
    } else if (password === "") {
      Alert.alert("OPS!", "A senha não pode ficar em branco :)")
    } else if (password.length < 6) {
      Alert.alert("OPS!", "A senha tem que possuir no mínimo 6 carateres :)")
    } else {
      registerUser(name, email, password)
    }
  }

  //Função para cadastrar usuário
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
          Promise.all([
            await AsyncStorage.setItem('@users', JSON.stringify(concatUsers)),
            await AsyncStorage.setItem('@user', JSON.stringify(newUser))
          ])
          setUser(newUser);
          Alert.alert('Sucesso!', 'Conta criada com sucesso, login será automatico dessa vez :)');
        } catch (err) {
          Alert.alert('OPS!', 'Ocorreu um erro ao criar a sua conta, por favor, tente novamente.');
        }
      }
    } else {
      let concatUsers: IUser[] = [
        newUser
      ]
      try {
        Promise.all([
          await AsyncStorage.setItem('@users', JSON.stringify(concatUsers)),
          await AsyncStorage.setItem('@user', JSON.stringify(newUser))
        ])
        setUser(newUser);
        Alert.alert('Sucesso!', 'Conta criada com sucesso, login será automatico dessa vez :)');
      } catch (err) {
        console.log(err)
        Alert.alert('OPS!', 'Ocorreu um erro ao criar a sua conta, por favor, tente novamente.');
      }
    }
  }

  //Função para salvar pokemon avistado
  const spotPokemon = async (item: IDescriptionPokemon) => {
    const resultUsers = await AsyncStorage.getItem('@users');

    if (resultUsers !== null) {
      const users: IUser[] = JSON.parse(resultUsers);
      const resultIndex = users.findIndex(user => user?.email?.includes(user?.email?.toString()));

      
      if (resultIndex >= 0 && user?.sighted !== undefined) {
        let userUpdate = {
          ...user,
          sighted: [...user?.sighted, item]
        }

        users[resultIndex] = userUpdate;

        try {
          Promise.all([
            await AsyncStorage.setItem('@users', JSON.stringify(users)),
            await AsyncStorage.setItem('@user', JSON.stringify(userUpdate))
          ]);

          setUser(
            {
              ...user,
              sighted: [...user?.sighted, item]
            }
          )
          return Alert.alert('EBA!', 'O pokemon foi salvo como avistado!');
        } catch (err) {
          console.log(err)
          Alert.alert('OPS!', 'Ocorreu um erro ao salvar o pokemon como avistado, por favor, tente novamente.');
        }
      }
    }
  }

  const capturePokemon = async (item: IDescriptionPokemon) => {
    const resultUsers = await AsyncStorage.getItem('@users');

    if (resultUsers !== null) {
      const users: IUser[] = JSON.parse(resultUsers);
      const resultIndex = users.findIndex(user => user?.email?.includes(user?.email?.toString()));

      
      if (resultIndex >= 0 && user?.captured !== undefined) {
        let userUpdate: IUser = {
          ...user,
          captured: [...user?.captured, item]
        }

        users[resultIndex] = userUpdate;

        try {
          Promise.all([
            await AsyncStorage.setItem('@users', JSON.stringify(users)),
            await AsyncStorage.setItem('@user', JSON.stringify(userUpdate))
          ]);
          
          setUser(
            {
              ...user,
              captured: [...user?.captured, item]
            }
          )
          return Alert.alert('EBA!', 'O pokemon foi capturado!');
        } catch (err) {
          console.log(err)
          Alert.alert('OPS!', 'Ocorreu um erro ao salvar o pokemon como avistado, por favor, tente novamente.');
        }
      }
    }
  }


  return (
    <UserContext.Provider value={{ user, signin, validateFields, spotPokemon, capturePokemon }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;