import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default class Projetos extends Component{
   
  render(){

    return (
    
      <ScrollView>
        <View style={styles.container}> 
          <Text style={styles.title}>Projetos Praticos</Text>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Desafio')} >
              <Text style={styles.txtBtn}>
                Banco React
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Filmes')} >
              <Text style={styles.txtBtn}>
                Filmes
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Cronometro')} >
              <Text style={styles.txtBtn}>
                Cronômetro
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Insta')} > 
              <Text style={styles.txtBtn}>
                  Insta
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Biscoito')} >
              <Text style={styles.txtBtn}>
                  Biscoito
              </Text>
          </TouchableOpacity>
          <Text style={styles.title}>Componentes/Funcoes</Text>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('FuncaoAsync')} >
              <Text style={styles.txtBtn}>
                  Asyncstorage
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
              <Text style={styles.txtBtn}>
                  Picker
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} style={styles.btn} onPress={() => this.props.navigation.navigate('SwitchSliderModal')}>
              <Text style={styles.txtBtn}>
                  Switch/Slider/Modal
              </Text>
          </TouchableOpacity>
        </View>
      </ScrollView> 
    );
  }
}
  
const styles = StyleSheet.create({

  container:{
    padding: 20,
    flex:1,
    alignItems:"center"
  },
  title:{
    fontSize: 24,
    color: '#190053',
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: 36,
    marginBottom: 20,
  },
  btn:{
    backgroundColor: '#190053',
    borderRadius: 10,
    height: 60,
    width: 300,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 12,
  },
  txtBtn:{
    fontSize: 20,
    color: 'white',
  }
});