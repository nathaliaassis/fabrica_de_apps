import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class ModalContent extends Component{

  render(){
    return ( 
        <View style={{
            backgroundColor: '#ff5555', 
            width: '80%', 
            height: 350, 
            justifyContent: 'center', 
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
            borderRadius: 20,
        }}>
            <Text style={{color: '#fff', fontSize: 28, marginBottom: 12,}}>Seja Bem-Vindo!</Text>
            <Button title='sair' onPress={this.props.fechar} />
        </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#3d3d3d',
  },

});