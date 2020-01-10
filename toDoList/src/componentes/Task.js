import React from 'react'
import {Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import Swipeable from 'react-native-swipeable'
import styles from './taskStyles'

export default props => {
    /*let check = null
    if(props.doneAt !== null){
        check = (
            <View style={styles.done}>
                <Icon name='check' size={20} color={styles.iconColor.color} />
            </View>
        )
    } else {
        check = (<View style={styles.pending}></View>)
    }*/

    let styleDate = null
    if(props.doneAt !== null){
        styleDate = styles.date
    } else {
        styleDate = [styles.date, {paddingHorizontal: 0,}]
    }

    const descStyle = props.doneAt !== null ? { textDecorationLine: 'line-through'} : {}

    /* //Codigo original
    const leftContent = (
        <View style={styles.exclude}>
            <Icon name='trash' size={20} color='#FFF'></Icon>
            <Text style={styles.excludeText}>Excluir</Text>
        </View>
    )*/

    const leftButtons = [
        <TouchableOpacity style={[styles.checkLeftContent]}
            onPress={() => props.onToggleTask(props.id)}>
                <Icon name={props.doneAt === null ? 'check' : 'minus-circle'} size={30} color='#FFF'/>
        </TouchableOpacity>,
    ]

    const rightButtons = [
        <TouchableOpacity style={[styles.excludeRightContent]}
            onPress={() => props.onDelete(props.id)}>
                <Icon name='trash' size={30} color='#FFF'></Icon>
        </TouchableOpacity>,
    ]

    return (
        <Swipeable  leftActionActivationDistance={150} onLeftActionActivate ={() => props.onToggleTask(props.id)} leftButtons ={leftButtons}
                    rightActionActivationDistance={150} onRightActionActivate={() => props.onDelete(props.id)} rightButtons={rightButtons}
                    >
            <View style={styles.container}>
                {/*<TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}>{check}</View>
                </TouchableWithoutFeedback>*/}
                <View>
                    <Text style={[styles.description, descStyle]}>
                        {props.desc}
                    </Text>
                    <View style={styles.checkContainer}>
                        {props.doneAt !== null ? 
                            <View style={styles.done}>
                                <Icon name='check' size={12} color={styles.iconColor.color} />
                            </View> : false}
                        <Text style={styleDate}>
                            {moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM [/] YYYY')}
                        </Text>
                    </View>             
                </View>
            </View>
        </Swipeable>
    )
}