import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';

export default class Cronometro extends Component{

  constructor(props){
    super(props);
    this.state = {
      timer: 0,
      img: require('../cronometro.png'), 
      action: 'começar'
    };

    this.time = null;
    this.comecar = this.comecar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  comecar(){

    if(this.time != null){
      clearInterval(this.time);
      this.time = null;

      this.setState({
        action: 'Continuar'
      });
    }
    else{
      this.time =  setInterval(() => {
        this.setState({
          timer: this.state.timer + 0.1
        })
      }, 100);
      this.setState({
        action: 'Parar'
      });
    }
  }
  limpar(){
    if(this.time != null){
      clearInterval(this.time);
      this.time = null;
    }

    this.setState({
      timer: 0,
      action: 'Começar'
    });
  }
  
  render(){
    return (
    
      <View style={styles.container}>
        <Image 
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.button} onPress={this.comecar}>
            <View>
              <Text style={styles.txtBtn}> {this.state.action} </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.limpar}>
            <View>
              <Text style={styles.txtBtn}>limpar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({

  container:{
    display: 'flex',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
    padding: 20
  },
  timer:{
    position: 'absolute',
    fontSize: 48,
    color:'white',
  },
  img:{
    display: 'flex',
    height: 250,
    width: 250,
  },
  btns:{
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  button:{
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    display: 'flex',
    backgroundColor: 'white'
  },
  txtBtn:{
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#123456',
    fontWeight: 'bold'
  }
});