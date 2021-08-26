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

// import { useFonts } from 'expo-font';

// import { Container } from './styles';

const App: React.FC = () => {
  
  useEffect(() => {
    SplashScreen.hide()
  })

  // const [effectLoaded, setEffectLoaded] = useState(false);

  // const [loaded] = useFonts({
  //   OPenSansRegular: require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
  //   OPenSansMedium: require('../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
  //   OPenSansBold: require('../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
  //   OPenSansSemiBold: require('../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

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