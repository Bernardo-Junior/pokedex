import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import SideBar from '../../../presentation/components/SideBar';

import Home from '../../../presentation/pages/Home';
import DescriptionAllPokemons from '../../../presentation/pages/Home/Description';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import resp from '../../../utils/responsivity';

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <SideBar {...props} />}
      edgeWidth={resp(100)}
      drawerStyle={{
        width: resp(340),
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="DescriptionAllPokemons" component={DescriptionAllPokemons} />
    </Drawer.Navigator>
  )
};

const LoggedInStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  )
};

export default LoggedInStack;