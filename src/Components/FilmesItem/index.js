import React, {Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FilmesItem extends Component{

    render(){
        const {nome, foto} = this.props.data;
        return(

            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.txt}>{nome}</Text>
                    <Image 
                        source={{uri: foto}}
                        style={styles.img}
                    />
                    <View style={styles.areaBtn}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txtbtn}>leia mais</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    txt:{
        color: '#343535',
        fontSize: 18,
        marginBottom: 16,
    },
    card:{
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 10,
        elevation: 3,
        marginBottom: 16,
    },
    img:{
        height: 250,
        borderRadius: 4,
        zIndex: 1,
    },
    areaBtn:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 5,
    },
    btn:{
        backgroundColor: '#09a6ff',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    txtbtn:{
        color: 'white',
        textTransform: "uppercase",
        fontWeight: '500',
    }
})