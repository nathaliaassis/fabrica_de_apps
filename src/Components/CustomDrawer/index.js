import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScroolView} from 'react-native';
import {DrawerNavigatorItems} from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';

class CustomDrawer extends Component {
    render(){
        <View style={styles.container}>
            <View style={styles.circle}></View>
            <Text style={styles.text}>
                Bem-Vindo(a)!
            </Text>
            <ScrollView>
                <DrawerNavigatorItems {...this.props.items}/>
            </ScrollView>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtbtn}>

                </Text>
            </TouchableOpacity>
        </View>
    }
}
export default CustomDrawer;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    circle:{
        color: '#ff5555',
        height: 100,
        width: 50,
    },
    text:{
        fontSize: 18,
        color: 'white',
    },
    btn:{
        backgroundColor: '#ff5555',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntxt:{
        color: 'white',
        fontSize: 18,
    }
});