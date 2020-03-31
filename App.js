import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from './src/Components/CustomDrawer/index';
 
import Home from './src/Pages/Home';
import ProjetosRotas from './src/ProjetosRotas';
import Contato from './src/Pages/Contato';
import Filmes from './src/Pages/Filmes';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
      initialRouteName="ProjetosRotas"
        tabBarOptions={{
          activeTintColor: '#2e246c',
          inactiveTintColor: 'gray',
          labelPosition: 'beside-icon',
          style:{
            backgroundColor: 'white',
          }
        }}
      >
        
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen name="ProjetosRotas" component={ProjetosRotas} />
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator> */}
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#ff5555',
          contentContainerStyle: CustomDrawer
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
        />
        <Drawer.Screen name="Projetos" component={ProjetosRotas} />
        <Drawer.Screen name="Contatos" component={Contato} />
        <Drawer.Screen name="Filmes" component={Filmes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}