import React from 'react'
import {View, Text, ImageBackground, SafeAreaView, ScrollView} from 'react-native'
import styles from '../styles/indexAppStyles'
import {getStringDeDataPtBrSemHoras} from '../global/UtilString'
import backgroudTop from '../../assets/images/backgroudTop.jpg'
import AboutCovid from './AboutCovid19'
import Preventions from './Preventions'
import Informations from './Informations'

export default props => {
    getComponentView = (componentView) => {
        switch (componentView) {
            case 'about':
                return <AboutCovid/>;
            case 'prevention':
                return <Preventions/>;
            case 'information':
                return <Informations/>;
            default:
                return <Preventions/>;
        }
    }

    return(
        <View style={styles.container}>
            {/* Header da tela */}    
            <ImageBackground source={backgroudTop} style={styles.backgroud}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Covid-19</Text>
                </View>
                <View style={styles.titleBarRow}>
                    <Text style={styles.subtitle}>{props.titleView}</Text>
                    <Text style={styles.subtitle}>{getStringDeDataPtBrSemHoras()}</Text>
                </View>
                <View style={styles.body}> 
                    <SafeAreaView>
                        <ScrollView>
                            {getComponentView(props.componentView)}
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </View>
    )
}
