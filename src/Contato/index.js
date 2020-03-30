import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


export default class Contato extends Component{
   
  render(){

    return (
    
      <View style={styles.container}>
        <Text>Ola, i am contact page!</Text>
      </View> 
    );
  }
}
  
  const styles = StyleSheet.create({
  
    container:{
      flex:1,
      padding: 20,
      backgroundColor: '#3d3d3d',
    },
  
  });