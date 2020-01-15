import React from 'react'
import {Text, View, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import Swipeable from 'react-native-swipeable'
import styles from './taskStyles'
import {isDataMenorQueHoje, isDataPreenchida, isDataNula} from '../UtilDate'
import {getStringDeDataPtBrSemHoras,} from '../UtilString'

export default props => {
    /*let check = null
    if(isDataPreenchida(props.doneAt)){
        check = (
            <View style={styles.done}>
                <Icon name='check' size={20} color={styles.iconColor.color} />
            </View>
        )
    } else {
        check = (<View style={styles.pending}></View>)
    }*/

    let descStyle = isDataPreenchida(props.doneAt) ? { textDecorationLine: 'line-through'} : {}
    let styleDate = styles.date
    let iconLeftDate = (
        <View style={styles.done}>
            <Icon name='check' size={12} color={'green'} />
        </View>
    );

    if(isDataNula(props.doneAt)){
        const fontColorLast = isDataMenorQueHoje(props.estimateAt) ? styles.dateLastColor : null
        const paddingHorizontal = isDataMenorQueHoje(props.estimateAt) ?  styles.date.paddingHorizontal : 0
        styleDate = [styleDate, {paddingHorizontal}, fontColorLast];
        iconLeftDate = isDataMenorQueHoje(props.estimateAt) ? (
            <View style={[styles.done, {backgroundColor: 'transparent',}]}>
                <Icon name='clock-o' size={12} color={'red'} />
            </View> 
        ) : false;
    }

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
                <Icon name={isDataNula(props.doneAt) ? 'check' : 'minus-circle'} size={30} color='#FFF'/>
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
                        {iconLeftDate}
                        <Text style={styleDate}>
                            {getStringDeDataPtBrSemHoras(props.estimateAt)}
                        </Text>
                    </View>             
                </View>
            </View>
        </Swipeable>
    )
}