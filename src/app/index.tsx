import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Platform, View } from 'react-native';
import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';
import StatusBariOS from '../presentation/components/StatusBariOS';
import { ColorPrimary, Container } from '../utils/global';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Routes from '../infra/routes';

// import { Container } from './styles';

const app: React.FC = () => {
  
  useEffect(() => {
    SplashScreen.hide()
  })

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
      {/* <Container /> */}
    </NavigationContainer>
  )
}

export default app;