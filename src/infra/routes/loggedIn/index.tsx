import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import SideBar from '../../../presentation/components/SideBar';

import Home from '../../../presentation/pages/Home';
import DescriptionAllPokemons from '../../../presentation/pages/Home/Description';
import PokemonListing from '../../../presentation/components/PokemonListing';
import PokemonDetails from '../../../presentation/components/PokemonDetails';
import Observations from '../../../presentation/components/Observations';

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
      <Drawer.Screen
        name="Home" component={Home}
      />
      <Drawer.Screen
        name="DescriptionAllPokemons"
        component={DescriptionAllPokemons}
        options={{ unmountOnBlur: true }} 
      />
      <Drawer.Screen
        name="PokemonListing"
        component={PokemonListing}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Observations"
        component={Observations}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  )
};


const LoggedInStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
    >
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  )
};

export default LoggedInStack;