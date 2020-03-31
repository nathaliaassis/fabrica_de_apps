import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import Lista from '../../Components/Lista';

export default class Insta extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          desc: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          post: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: true, 
          likers: 1
         },
        {
          id: '2', 
          nome: 'Matheus', 
          desc: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          post: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          desc: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          post: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          desc: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          post: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          desc: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          post: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
    }

  }

  render(){
    return (
    
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
              source={require('../../Assets/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              source={require('../../Assets/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>
        <FlatList 
          showsHorizontalScrollIndicator={false}
          data={this.state.feed}
          keyExtractor={ (item) => item.id}
          renderItem={ ({item}) => <Lista data={item} />}
        />
     
      </View> 
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    paddingBottom: 12,
  },
  header:{
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 1
  },
  logo:{
  },
  send:{
    width: 23,
    height: 23,
  },

});