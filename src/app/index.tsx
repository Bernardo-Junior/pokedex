import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';

// import { Container } from './styles';

const app: React.FC = () => {
  
  useEffect(() => {
    SplashScreen.hide()
  })

  return (
    <NavigationContainer>
      <View />
    </NavigationContainer>
  )
}

export default app;