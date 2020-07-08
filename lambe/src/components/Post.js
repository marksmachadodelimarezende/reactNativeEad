import React, {Component} from 'react'
import {StyleSheet, View, Image, Dimensions} from 'react-native'
import Author from './Author'
import Comments from './Comments'

export default class Post extends Component {
    render() {
        
        return(
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image}></Image>
                <Author email='email@email.com.br' nickname='Fulano de tal' />
                <Comments comments={this.props.comments} />
            </View>
        )
    }
}

const larguraTela = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        width: larguraTela,
        height: larguraTela * 3 / 4,
        resizeMode: 'contain',
    },
})