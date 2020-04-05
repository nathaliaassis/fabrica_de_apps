import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Easing } from 'react-native-reanimated';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Home extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      animationWidth: new Animated.Value(0),
      animationHeight: new Animated.Value(0),
      animationOpacity: new Animated.Value(0),
      spinAnimation: new Animated.Value(0),
      barAnimation: new Animated.Value(0),
      barOpacity: new Animated.Value(1),
    }

    this.startLoop = this.startLoop.bind(this);
    Animated.sequence([

      Animated.timing(
        this.state.barAnimation,
        {
          toValue: 300,
          duration: 3000,
        }
      ),

      Animated.parallel([
        Animated.timing(
          this.state.barAnimation,
          {
            toValue: 0,
            duration: 1000,
          }
        ),
        Animated.timing(
          this.state.barOpacity,
          {
            toValue: 0,
            duration: 1000,
          }
        ),
      ]),

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
      ]),

    ]).start();
  }

  startLoop(){
    Animated.loop(
      Animated.timing(
        this.state.spinAnimation,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        }
      )
    ).start();
  }

  render(){

    let spin = this.state.spinAnimation.interpolate({
                inputRange: [0,1],
                outputRange: ['0deg', '360deg']
              });
    return (
    
      <View style={styles.container}>
        <LinearGradient colors={['#2e246c', '#190053', '#020024',]} style={styles.linearGradient}>
          <Animated.View style={[styles.bar, {width: this.state.barAnimation, opacity: this.state.barOpacity}]}></Animated.View>
          <Animated.View style={[styles.square, 
                                {width: this.state.animationWidth, 
                                height: this.state.animationHeight,
                                transform: [{ rotate: spin}]}
                                ]}>
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
        <TouchableHighlight style={styles.btn} onPress={this.startLoop}>
          <Text style={styles.btntxt}>
            Start Loop
          </Text>
        </TouchableHighlight>
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
  bar:{
    backgroundColor: '#ff5555',
    height: 5,
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
  btn:{
    backgroundColor: '#ff5555',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  btntxt:{
    fontSize: 20,
    color: 'white',
    fontWeight: '300',
    textTransform: "uppercase",
  },
});