import React, { Component } from 'react'
import {Text, View, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import homeStyles from '../styles/homeStyles'
import {getStringDeDataPtBrSemHoras} from '../global/UtilString'
import backgroudTop from '../../assets/images/backgroudTop.jpg'
import Preventions from '../components/Preventions'
import AboutCovid from '../components/AboutCovid19'

class HomeScreen extends Component {
    render() {
        return(
            <View style={homeStyles.container}>
                {/* Header da tela */}    
                <ImageBackground source={backgroudTop} style={homeStyles.backgroud}>
                    <View style={homeStyles.titleBar}>
                        <Text style={homeStyles.title}>Covid-19</Text>
                    </View>
                    <View style={homeStyles.titleBarRow}>
                        <Text style={homeStyles.subtitle}>Prevenção</Text>
                        <Text style={homeStyles.subtitle}>{getStringDeDataPtBrSemHoras()}</Text>
                    </View>
                    <View style={homeStyles.body}> 
                        <SafeAreaView>
                            <ScrollView>
                                <Preventions/>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
export default HomeScreen;