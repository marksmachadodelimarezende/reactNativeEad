import React from 'react'
import {View, StyleSheet} from 'react-native'
import Field from './Field'
//import styles from './styles/fieldStyles'
import {styles} from './styles/mineFieldStyles'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} />
        })
    return <View key={r} style={styles.directionTable}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

