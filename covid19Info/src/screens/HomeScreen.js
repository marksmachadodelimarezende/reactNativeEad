import React, { Component } from 'react'
import {Text, View, ImageBackground, FlatList, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import homeStyles from '../styles/homeStyles'
import {getStringDeDataPtBrSemHoras} from '../global/UtilString'
import backgroudTop from '../../assets/images/backgroudTop.jpg'

class App extends Component {
    render() {
        return(
            <View style={homeStyles.container}>
                {/* Header da tela */}    
                <ImageBackground source={backgroudTop} style={homeStyles.backgroud}>
                    <View style={homeStyles.titleBar}>
                        <Text style={homeStyles.title}>Covid-19</Text>
                        <Text style={homeStyles.subtitle}>Informações</Text>
                        <Text style={homeStyles.subtitle}>{getStringDeDataPtBrSemHoras()}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
export default App;