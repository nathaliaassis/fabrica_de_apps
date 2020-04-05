import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Easing } from 'react-native-reanimated';

export default class Home extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      animationWidth: new Animated.Value(0),
      animationHeight: new Animated.Value(1),
      animationOpacity: new Animated.Value(0),
      spinAnimation: new Animated.Value(0),
    }

    Animated.sequence([


      Animated.parallel([
        Animated.timing(
          this.state.animationWidth,
          {
            toValue: 250,
            duration: 2000
          }
        ),
        Animated.timing(
          this.state.animationHeight,
          {
            toValue: 250,
            duration: 1000
          }
        ),
      ]),

      Animated.parallel([
        Animated.timing(
          this.state.animationOpacity,
          {
            toValue: 1,
            duration: 2000
          }
        ),
          Animated.loop(
            Animated.timing(
              this.state.spinAnimation,
              {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
              }
            )
          ),
      ]),

    ]).start();

    const spin = this.state.spinAnimation.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '360deg']
    })
  }
  render(){
    return (
    
      <View style={styles.container}>
        <LinearGradient colors={['#2e246c', '#190053', '#020024',]} style={styles.linearGradient}>
          <Animated.View style={[styles.square, 
                                {width: this.state.animationWidth, 
                                height: this.state.animationHeight,
                                transform: [{ rotate: this.state.spinAnimation.interpolate({
                                  inputRange: [0,1],
                                  outputRange: ['0deg', '360deg']
                                })}]
                                }]}>
          </Animated.View>
          <Animated.View style={[styles.boxtext, {opacity: this.state.animationOpacity}]}>
            <Text style={styles.title}>
              Nathália Assis
            </Text>
            <Text style={styles.subtitle}>
              Fábrica de Apps
            </Text>
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
    backgroundColor: '#ff5555',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  boxtext:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
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