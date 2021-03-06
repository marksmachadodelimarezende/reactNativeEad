import React from 'react'
import {View, Text} from 'react-native'

const fonte = { style: { fontSize: 30} }
function clonePaiParaFilho(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, {...props, ...c.props}))
}
export  const Filho = props =>
    <View>
        <Text {...fonte}>    Filho: {props.nome} {props.sobrenome}
        </Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>  Pai: {props.nome} {props.sobrenome} </Text>
        {/*props.children*/}
        {clonePaiParaFilho(props)}
    </View>

export  const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome} </Text>
        <Pai nome='Andre' sobrenome={props.sobrenome}>
            <Filho nome='Ana'/>
            <Filho nome='Ana 2'/>
            <Filho nome='Ana 3'/>
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Pool'/>
            <Filho nome='Pool 2'/>
        </Pai>
    </View>