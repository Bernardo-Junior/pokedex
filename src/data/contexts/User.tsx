import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import { IUser, IUserContext } from "../protocols/User";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    create()
  })

  const create = async () => {
    let userTest: IUser[] = [{
      captured: null,
      email: "bernardo@gmail.com",
      favorites: null,
      logged: false,
      name: "Bernardo",
      password: "12345",
      sighted: null
    }]
    await AsyncStorage.setItem('@users', JSON.stringify(userTest))
  }

  const signin = async (email: string, password: string) => {
    console.log("ENTROU?")
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

  return (
    <UserContext.Provider value={{ user, signin }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;