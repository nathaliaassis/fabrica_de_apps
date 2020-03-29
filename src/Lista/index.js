import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default class Lista extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data,
        };
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.loadIcon = this.loadIcon.bind(this);
    }
    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0 ){
            return;
        }

        return(
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );
    }
    like(){
        let feed = this.state.feed;
    
        if(feed.likeada === true){
          this.setState({
            feed:{
              ...feed,
              likeada:false,
              likers: feed.likers - 1
            }
          });
        }else{
          this.setState({
            feed:{
              ...feed,
              likeada:true,
              likers: feed.likers + 1
            }
          });   
        }
    
    }
    loadIcon(likeada){
        return likeada ? require('../img/likeada.png') : 
                require('../img/like.png')
    }

    render(){
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image 
                        source={{uri: this.state.feed.imgperfil}}
                        style={styles.fotoPerfil}
                    />
                    <Text style={styles.userName}>{this.state.feed.nome}</Text>
                </View>
                <Image 
                    resizeMode='cover'
                    source={{uri: this.state.feed.post}}
                    style={styles.post}
                />
                <View style={styles.areaBtns}>
                    <TouchableOpacity onPress={this.like}>
                        <Image 
                          source={this.loadIcon(this.state.feed.likeada)} 
                          style={styles.iconsPost}       
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSend}>
                        <Image 
                          source={require('../img/send.png')} 
                          style={styles.iconsPost}       
                        />
                    </TouchableOpacity>
                </View>
                {this.mostraLikes(this.state.feed.likers)}
                <View style={styles.footer}>
                    <Text style={styles.footerName}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.desc}>
                        {this.state.feed.desc}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    userName:{
        fontSize: 22,
        textAlign: 'left',
        color: '#1e1e1e',
        marginLeft: 8,
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    post:{
       flex:1,
       height: 400,
       alignItems: 'center',
    },
    areaBtns:{
        flexDirection: 'row',

        padding: 5,
    },  
    iconsPost:{
        height: 28,
        width: 28,
    },
    btnSend:{
       paddingLeft: 5, 
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 5,
    },  
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerName:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e1e1e',
        paddingLeft: 8,
    },
    desc:{
        paddingLeft: 5,
        fontSize: 15,
        color: '#1e1e1e',
    },
});