import React from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import fieldStyles from './styles/fieldStyles'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
    const {mined, opened, nearMines, exploded, flagged, bigger} = props

    const styleField = [fieldStyles.field]
    //Outros estilos por testes
    if (opened) styleField.push(fieldStyles.opened)
    if (exploded) styleField.push(fieldStyles.exploded)
    if (flagged) styleField.push(fieldStyles.flagged)
    //if (styleField.length === 1) styleField.push(fieldStyles.regular)
    if (!opened && !exploded) styleField.push(fieldStyles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }
    return (
        <TouchableWithoutFeedback onPress={props.onOpen}>
            <View style={styleField}>
            {!mined && opened && nearMines > 0 
                ? <Text style={[fieldStyles.label, {color: color}]}>{nearMines}</Text> 
                : false }
            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag /> : false}
            {flagged && bigger ? <Flag bigger/> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}
