import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

//Stack para usuário não logado
import Login from '../../../presentation/pages/Login';
import Register from '../../../presentation/pages/Register';

const Stack = createStackNavigator();

const LoggedOutStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
};

export default LoggedOutStack;