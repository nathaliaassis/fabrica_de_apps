import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from './src/Components/CustomDrawer/index';
 
import Home from './src/Pages/Home';
import ProjetosRotas from './src/ProjetosRotas';
import Contato from './src/Pages/Contato';
import Filmes from './src/Pages/Filmes';
import Insta from './src/Pages/Insta';
import ConversorDeMoedas from './src/Pages/ConversorDeMoedas';
const Drawer = createDrawerNavigator();

export default function MyStack() {

  return (
    <NavigationContainer>
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
        <Drawer.Screen name="Insta" component={Insta} />
        <Drawer.Screen name="Conversor" component={ConversorDeMoedas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}