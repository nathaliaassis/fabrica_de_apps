import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Conversor from '../../Components/Conversor';

export default class ConversorDeMoedas extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){

        return(
            <View style={styles.container}>
                <Conversor moedaA='USD' moedaB='BRL'/>
                <Conversor moedaA='BRL' moedaB='USD'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

