import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'Aluno 1', nota: 7.9},
    {id: 2, nome: 'Aluno 2', nota: 7.9},
    {id: 3, nome: 'Aluno 3', nota: 7.9},
    {id: 4, nome: 'Aluno 4', nota: 7.9},
    {id: 5, nome: 'Aluno 5', nota: 7.9},
    {id: 6, nome: 'Aluno 6', nota: 7.9},
    {id: 7, nome: 'Aluno 7', nota: 7.9},
    {id: 8, nome: 'Aluno 8', nota: 7.9},
    {id: 9, nome: 'Aluno 9', nota: 7.9},
    {id: 11, nome: 'Aluno 11', nota: 7.9},
    {id: 12, nome: 'Aluno 12', nota: 7.9},
    {id: 13, nome: 'Aluno 13', nota: 7.9},
    {id: 14, nome: 'Aluno 14', nota: 7.9},
    {id: 15, nome: 'Aluno 15', nota: 7.9},
    {id: 16, nome: 'Aluno 16', nota: 7.9},
    {id: 17, nome: 'Aluno 17', nota: 7.9},
    {id: 18, nome: 'Aluno 18', nota: 7.9},
    {id: 19, nome: 'Aluno 19', nota: 7.9},
    {id: 21, nome: 'Aluno 21', nota: 7.9},
    {id: 22, nome: 'Aluno 22', nota: 7.9},
    {id: 23, nome: 'Aluno 23', nota: 7.9},
    {id: 24, nome: 'Aluno 24', nota: 7.9},
    {id: 25, nome: 'Aluno 25', nota: 7.9},
    {id: 26, nome: 'Aluno 26', nota: 7.9},
    {id: 27, nome: 'Aluno 27', nota: 7.9},
    {id: 28, nome: 'Aluno 28', nota: 7.9},
    {id: 29, nome: 'Aluno 29', nota: 7.9},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 40,
    backgroudColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Trecho aula 35
    //flexDirection - padrao na coluna
    //alignItems: 'center', //FlexBox - alignItems trabalha sobre o cross axis (horizontal)
    //justifyContent: 'space-around', //FlexBox - justifyContent trabalha sobre o main axis (Vertical)

    flexDirection: 'row', //Com flex box em direcao de linha, o cross axis e main axis mudam (invertem direcao).
    alignItems: 'center',//FlexBox - alignItems trabalha sobre o main axis (Vertical)
    justifyContent: 'space-between',//FlexBox - justifyContent trabalha sobre o cross axis (Horizontal)
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}