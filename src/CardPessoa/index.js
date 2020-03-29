import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class CardPessoa extends Component{
 
    render(){
        return(
        <View style={styles.card}>
            <Text style={styles.nome}>{this.props.data.nome}</Text>
            <Text style={styles.info}>{this.props.data.idade} anos</Text>
            <Text style={styles.info}>{this.props.data.email}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({

    card:{
        display: 'flex',
        padding: 20,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        marginBottom: 20,
        borderRadius: 8,  
    },
    nome:{
        fontSize: 18,
        color: '#222',
        fontWeight: "600",
        textTransform: "capitalize"
    },
    info:{
        fontSize: 14,
        fontWeight: '400',
        color: '#222'
    }
});