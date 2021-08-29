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
import { UserProvider } from '../data/contexts/User';

const App: React.FC = () => {
  
  return (
    <NavigationContainer>
      {
        Platform.OS === "android" ? (
          <StatusBar backgroundColor={ColorPrimary} barStyle="light-content"/>
        ) : (
          <StatusBariOS />
        )
      }
      <UserProvider>
        <Routes />
      </UserProvider>
    </NavigationContainer>
  )
}

export default App;