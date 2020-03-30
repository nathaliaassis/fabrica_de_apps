import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Home extends Component{

  render(){
    return (
    
      <View style={styles.container}>
        <Text>Nathália Assis</Text>
      </View> 
    );
  }
}
  
  const styles = StyleSheet.create({
  
    container:{
      flex:1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
  
  });