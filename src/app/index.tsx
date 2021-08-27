import React, { useEffect, useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

//Navegação
import { NavigationContainer } from '@react-navigation/native';

//Status Bar 
import SplashScreen from 'react-native-splash-screen';
import StatusBariOS from '../presentation/components/StatusBariOS';
import { ColorPrimary } from '../utils/global';

import Routes from '../infra/routes';

import AsyncStorage from '@react-native-async-storage/async-storage'

const App: React.FC = () => {
  
  useEffect(() => {
    SplashScreen.hide();
    teste()
  })

  const teste = async () => {
    const asyncRetorno = await AsyncStorage.getItem('@teste');

    console.log(asyncRetorno);
  }

  return (
    <NavigationContainer>
      {
        Platform.OS === "android" ? (
          <StatusBar backgroundColor={ColorPrimary} barStyle="light-content"/>
        ) : (
          <StatusBariOS />
        )
      }
      <Routes />
    </NavigationContainer>
  )
}

export default App;