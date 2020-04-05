import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component{

  render(){
    return (
    
      <View style={styles.container}>
        <LinearGradient colors={['#2e246c', '#190053', '#020024',]} style={styles.linearGradient}>
          <Text style={styles.title}>
            Nathália Assis
          </Text>
          <Text style={styles.subtitle}>
            Fábrica de Apps
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
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
    textTransform: 'uppercase',
  },

});