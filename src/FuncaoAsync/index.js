import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class FuncaoAsync extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: '',
    }
    this.gravarNome = this.gravarNome.bind(this);
  }
  //toda vez que o app é montado ele executa essa funçao éâä♪
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({nome: value});
    });
  }

  //toda vez que um state é mudado, ele executa essa função
  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;

    if(prevState !== nome){
      await AsyncStorage.setItem('nome', nome);
    }
  }

  gravarNome(){
    this.setState({
      nome: this.state.input,
      input: '',
    });
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
  }
  render(){
    return (
    
      <View style={styles.container}>
        <View style={styles.viewInput}> 
          <TextInput 
            style={styles.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({ input: text,})}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity onPress={this.gravarNome}>
            <Text style={styles.btn}> + </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nome}>Nome: {this.state.nome}</Text>
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
  viewInput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    backgroundColor: 'white',
    width: 300,
    borderRadius: 8
  },
  btn:{
    flex: 1,
    width: 50,
    fontSize: 28,
    textAlign: "center",
    textAlignVertical: 'center',
    backgroundColor: '#3455aa',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 8,
  },
  nome:{
    color: 'white',
    fontSize: 32,
    marginTop: 8,
  },

});