import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Home Screen Navigation</Text>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})