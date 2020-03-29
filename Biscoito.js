import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase:'Clique no botão para mostrar frase',
      img: require('./src/biscoito.png')
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      'Você esquece, mas sempre lembra.',
      'Nunca demande aquilo que não pode controlar.',
      'Se apaixone mais, por melhor ou pior que isso seja.',
      'Você só vai descobrir o que realmente importa quando a merda acontecer.',
      'É como diz o grande poeta Chorão: Dias de Luta, dias de glória.',
      'Não seja vacilão com as pessoas.',
      'Deixar as coisas coisadas coisa tudo.',
      'Não coloque meta. Deixe a meta aberta, mas, quando atingir a meta, dobre a meta',
    ];
  }

  quebrarBiscoito(){
    let randomNumber = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[randomNumber] + '" ',
      img: require('./src/biscoitoAberto.png') 
    })
  }

  render(){
    return (
    
      <View style={styles.container}>
        <Text></Text>
        <Image 
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.frase}>{ this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.button} onPress={this.quebrarBiscoito}>
          <View>
            <Text style={styles.txtBtn}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View> 
    );
  }
}

const styles = StyleSheet.create({

  container:{
    display: 'flex',
    flex:1,
    backgroundColor: '#ffcd05',
    padding: 20
  },
  
  img:{
    display: 'flex',
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
  frase:{
    fontWeight: '300', 
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 16
  },
  input:{
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    backgroundColor: 'white',
     borderRadius: 8,
     marginBottom: 20 
  },
  button:{
    borderWidth: 2,
    borderColor: '#FFF',
    fontSize: 20,
    borderRadius: 22,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  txtBtn:{
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold'
  }
});