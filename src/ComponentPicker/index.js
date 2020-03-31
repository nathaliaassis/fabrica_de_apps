import React, {Component} from 'react';
import {StyleSheet, View, Text, Picker,} from 'react-native';

export default class ComponentPicker extends Component{
  constructor(props){
    super(props);

    this.state = {
     pizza: 0,
     pizzas: [
       {key: 1, nome: 'Tradicional', valor: 20.90},
       {key: 2, nome: 'Calabresa', valor: 18.90},
       {key: 3, nome: 'Portuguesa', valor: 20.90},
       {key: 4, nome: '4 Queijos', valor: 30.90},
     ]
    }
  }

  render(){

    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    });

    return (
    
      <View style={styles.container}>
        <Text style={styles.title}>
          Pizzas
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({
              pizza: itemValue,
            })
          }}
        >
          {pizzasItem}
        </Picker>
        <Text style={styles.selected}>
          Você escolheu: {this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.selected}>
          Valor: R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>        
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
    textAlign: 'center'
  },
  picker:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  selected:{
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
});