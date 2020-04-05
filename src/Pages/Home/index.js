import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { transform } from '@babel/core';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      largura: new Animated.Value(0),
      altura: new Animated.Value(100),
      opacidade: new Animated.Value(0),
      spin: new Animated.Value(0)
    };

    Animated.sequence([

      
      Animated.timing(
        this.state.largura,
        {
          toValue: 230,
          duration: 2000,
        }
      ),
      Animated.timing(
        this.state.opacidade,
        {
          toValue: 1,
          duration: 1000
        }
      ),
      Animated.timing(
        this.state.altura,
        {
          toValue: 230,
          duration: 1000
        }
      ),
      Animated.timing(
        this.state.spin,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear
        }
      ),
    ]).start();

  }

  render(){
    return (
    
      <View style={styles.container}>
        <LinearGradient colors={['#2e246c', '#190053', '#020024',]} style={styles.linearGradient}>
          <Animated.View style={[{
                                transform: [{rotate: this.state.spin}],
                                width: this.state.largura, 
                                height: this.state.altura},
                                styles.square]}>
            <Animated.View style={{opacity: this.state.opacidade, alignItems: 'center', position: 'absolute'}}>
              <Animated.Text style={styles.title}>
                Nathália Assis
              </Animated.Text>
              <Text style={styles.subtitle}>
                Fábrica de Apps
              </Text>
            </Animated.View>  
          </Animated.View>
        </LinearGradient>
      </View> 
    );
  }
}
  
const styles = StyleSheet.create({

  container:{
    flex:1,
  },
  linearGradient:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square:{
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ff5555',
  },
  title:{ 
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: 40,
  },
  subtitle:{
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
    textTransform: 'uppercase',
  },

});