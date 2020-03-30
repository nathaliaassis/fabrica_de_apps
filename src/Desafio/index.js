import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Picker, Switch, TouchableOpacity, TouchableWithoutFeedback,} from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      generos: [
        {key: 1, select: 'Feminino'},
        {key: 2, select: 'Masculino'},
        {key: 3, select: 'Não informar'},
      ],
      limite: 0,
      estudante: false,
      dados: '',
    }

    this.mostrarDados = this.mostrarDados.bind(this);
  }

  mostrarDados(){
    let nome = this.state.nome;
    let idade = this.state.idade;
    let sexo = this.state.generos[this.state.sexo].select;
    let limite = this.state.limite;
    let estudante = (this.state.estudante ? 'Sim' : 'Não')

    if(nome == '' || idade == '' ){
      alert('Os campos devem ser preenchidos corretamente')
    }

    this.setState({
        dados: 'Nome: ' + nome + ' Idade: ' + idade + ' Sexo: ' +sexo+ ' Limite: ' + limite + ' É estudante? ' +estudante
    });
  }

  render(){

    let generoOptions= this.state.generos.map((v, k)=>{
      return <Picker.Item  key={k} value={k} label={v.select}/>
    });

    return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Banco React</Text>
        <Text style={styles.sub}>O desafio</Text>
        <TextInput
          style={styles.input}
          value={this.state.nome}
          onChangeText={(texto) => this.setState({
            nome: texto
          })} 
          placeholder='Digite seu nome'
        />
        <TextInput
          style={styles.input}
          value={this.state.idade}
          onChangeText={(number) => this.setState({
            idade: number
          })} 
          placeholder='Digite sua idade'
        />
        <Picker
          style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 4, }}
          selectedValue={this.state.sexo}
          onValueChange={(itemSelected, itemIndex) => {
            this.setState({
              sexo: itemSelected,
            })
          }}
        >
          {generoOptions}
        </Picker>
        <Text style={styles.text}>Informe o limite que deseja receber: R$ {this.state.limite.toFixed(0)},00</Text>
        <Slider
          maximumTrackTintColor='#ff5555' 
          minimumTrackTintColor='#ff5555' 
          minimumValue={0}
          maximumValue={1000}
          thumbTintColor='#f55555'
          value={this.state.limite}
          onValueChange={(selectedLimite) => 
            this.setState({
              limite: selectedLimite,
            })
          }
        />
        <View style={styles.flex}>
          <Text style={styles.text}>Você é estudante?</Text>
          <Switch 
            value={this.state.estudante}
            onValueChange={(value) => {
              this.setState({
                estudante: value
              })
            }}
            thumbColor='#ff5555'
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.mostrarDados}>
          <View>
            <Text style={styles.btnText}>
              Abrir conta
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.card}> 
            <Text>Nome: {this.state.dados}</Text>
        </View>
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
  flex:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  title:{
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    textTransform: "uppercase",
  },
  sub:{
    color: 'white',
    textAlign: 'center',
    textTransform: "uppercase",
    fontSize: 18,
    marginBottom: 20,
  },
  text:{
    color: 'white',
    marginVertical: 16
  },

  input:{
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 16,
  },
  btn:{
    display: 'flex',
    justifyContent:'center',
    backgroundColor: '#ff5555',
    padding: 20,
  },
  btnText:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    borderRadius: 8,
  },
  card:{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
  }

});