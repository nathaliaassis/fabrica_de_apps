import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard} from 'react-native';

import ConversorApi from '../../Services/ConversorApi';

export default class Conversor extends Component{
    constructor(props){
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaA_vlr: 0,
            moedaB_vlr: 0,
            vlr_convertido: 0,
        };

        this.converter = this.converter.bind(this);
    }

    async converter(){
        let de_para =  this.state.moedaA + '_' + this.state.moedaB;
        const response = await ConversorApi.get(`convert?q=${de_para}&compact=ultra&apiKey=46ba56b120c419563070`);
        console.log(response.data);

        let cotacao = response.data[de_para];
        let resultado = (cotacao * parseFloat(this.state.moedaB_vlr));

        this.setState({
            vlr_convertido: resultado.toFixed(2),
        });
        Keyboard.dismiss();
    }

    render(){

        const { moedaA, moedaB} = this.props;

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Conversor</Text>
                <Text style={styles.subtitle}>{moedaA}/{moedaB}</Text>

                <TextInput 
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(moedaB_vlr)=> this.setState({moedaB_vlr})}
                    placeholder='Valor a ser convertido'
                />
                <TouchableOpacity style={styles.areabtn} onPress={this.converter}>
                    <Text style={styles.txtBtn}>Converter</Text>
                </TouchableOpacity>
                <Text style={styles.vlr}>
                    {(this.state.vlr_convertido === 0 ? '' : this.state.vlr_convertido)}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    title:{
        fontSize: 28,
        textTransform: "uppercase",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
    },
    input:{
        width: 280, 
        height: 45,
        borderRadius: 8,
        backgroundColor: '#fff',
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        margin: 20,
    },
    areabtn:{
        justifyContent: 'center',
        alignSelf: 'center',
        height: 45,
        width: 250,
        borderRadius: 10,
        backgroundColor: '#123456',
        marginHorizontal: 'auto'
    },
    txtBtn:{
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        textTransform: "uppercase",
        fontWeight: 'bold',
    },
    vlr:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    }
});

