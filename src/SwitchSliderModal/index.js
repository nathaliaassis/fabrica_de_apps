import React, {Component} from 'react';
import {StyleSheet, View, Text, Switch, Button, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import ModalContent from '../ModalContent';

export default class SwitchSliderModal extends Component{
  constructor(props){
    super(props);

    this.state = {
      status: false,
      value: 0,
      modalVisible: false,
    }
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState({
      modalVisible: true,
    })
  }
  sair(hide){
    this.setState({
      modalVisible: hide,
    })
  }

  render(){

    return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Switch/Slider</Text>
        <Switch 
          value={this.state.status} 
          onValueChange={(selectedValue) => this.setState({
            status: selectedValue,
          })}
          thumbColor='#ff5555'
        />
        <Text style={styles.title}>
          {(this.state.status) ? 'Ativo' : 'Inativo' }
        </Text>

        <Slider
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor='#ff5555'
          thumbTintColor="#ff5555"
          onValueChange={(selectedValue) => {
            this.setState({
              value: selectedValue,
            })
          }}
          value={this.state.value}
        />
        <Text style={styles.title}>
          {this.state.value.toFixed(0)}
        </Text>
        <Button title='entrar' onPress={this.entrar}/>
        <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
            <ModalContent fechar={() => this.sair(false)}/>
        </Modal>
      </View> 
    );
  }
}

const styles = StyleSheet.create({

  container:{
    display: 'flex',
    flex:1,
    backgroundColor: '#123456',
    padding: 20
  },
  title:{
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
});