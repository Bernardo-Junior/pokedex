import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

//Stack para usuário não logado
import Login from '../../../presentation/pages/login';
import Register from '../../../presentation/pages/register';

const Stack = createStackNavigator();

const LoggedOutStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
};

export default LoggedOutStack;