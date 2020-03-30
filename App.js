import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/Home';
import Sobre from './src/Sobre';
import Contato from './src/Contato';

const Tab = createBottomTabNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ff5555',
          inactiveTintColor: 'gray',
          style:{
            backgroundColor: '#3d3d3d',
          }
        }}
      >
        
        <Tab.Screen
          name="Home"
          component={Home}
          options={{title: 'Teste'}}
        />
        <Tab.Screen name="Contato" component={Contato} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}