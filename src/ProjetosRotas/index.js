import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Projetos from '../Projetos';
import Biscoito from '../Biscoito';
import Insta from '../Insta';
import Cronometro from '../Cronometro';
import Desafio from '../Desafio'
import SwitchSliderModal from '../SwitchSliderModal';
import FuncaoAsync from '../FuncaoAsync';

const Stack = createStackNavigator();

export default function ProjetosRotas() {
  return ( 
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#020024',
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                fontWeight: '300',
            }
        }}
    >
        <Stack.Screen name="Projetos" component={Projetos} />
        <Stack.Screen name="Desafio" component={Desafio} options={{title: 'Banco React'}}/>
        <Stack.Screen name="Insta" component={Insta} />
        <Stack.Screen name="Cronometro" component={Cronometro} options={{title: 'Cronômetro'}}/>
        <Stack.Screen name="Biscoito" component={Biscoito} />

        <Stack.Screen name="SwitchSliderModal" component={SwitchSliderModal} />
        <Stack.Screen name="FuncaoAsync" component={FuncaoAsync} />
    </Stack.Navigator>
  );
}