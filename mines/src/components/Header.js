import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Flag from './Flag'
import { styles } from './styles/headerStyles'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                        <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={props.buttonLabel}>Novo jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

