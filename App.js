import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
 
import Home from './src/Home';
import ProjetosRotas from './src/ProjetosRotas';
import Contato from './src/Contato';

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
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
        />
        <Drawer.Screen name="ProjetosRotas" component={ProjetosRotas} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}