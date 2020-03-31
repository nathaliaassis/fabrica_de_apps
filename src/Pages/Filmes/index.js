import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import FilmesItem from '../../Components/FilmesItem';

import api from '../../Services/api';


export default class Filmes extends Component{
    constructor(props){
        super(props);
        this.state = ({
            filmes: [],
            loading: true,
        }); 
    }
    
    async componentDidMount(){
        const response = await api.get('r-api?api=filmes');
        this.setState({
            filmes: response.data,
            loading: false,
        });
    }

    render(){

        if(this.state.loading){
            return(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator color="#09a6ff" size={40}/>
                </View>
            );
        }else{
            return(
                <View style={styles.container}>
                    <FlatList
                        data={this.state.filmes}
                        keyExtractor={item => item.id.toString()}
                        renderItem={ ({item}) => <FilmesItem data={item} /> }
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 16,
    }
});