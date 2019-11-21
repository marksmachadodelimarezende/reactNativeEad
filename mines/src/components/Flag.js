import React from 'react'
import {View} from 'react-native'
import flagStyles from './styles/flagStyles'

export default props => {
    const styleFlagpoleBigger = props.bigger ? flagStyles.flagpoleBigger : null
    const styleFlagBigger = props.bigger ? flagStyles.flagBigger : null
    const styleBase1Bigger = props.bigger ? flagStyles.base1Bigger : null
    const styleBase2Bigger = props.bigger ? flagStyles.base2Bigger : null

    return(
        <View style={flagStyles.container}>
            <View style={[flagStyles.flagpole, styleFlagpoleBigger]}></View>
            <View style={[flagStyles.flag, styleFlagBigger]}></View>
            <View style={[flagStyles.base1, styleBase1Bigger]}></View>
            <View style={[flagStyles.base2, styleBase2Bigger]}></View>
        </View>
    )
}
