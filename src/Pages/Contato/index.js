import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class Contato extends Component{
   
  render(){

    return (
    
      <View style={styles.container}>
        <LinearGradient colors={['#2980b9','#2c3e50',]} style={styles.linearGradient}>
          <Text style={styles.title}>
            Nathalia Assis
          </Text>
          <Text style={styles.subtitle}>
            (61) 98248-1874
          </Text>
        </LinearGradient>
      </View> 
    );
  }
}
  
const styles = StyleSheet.create({

  container:{
    flex:1,
  },
  linearGradient:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 28,
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: 40,
  },
  subtitle:{
    fontSize: 24,
    color: 'white',
    fontWeight: '300',
    textTransform: 'uppercase',
  },

});