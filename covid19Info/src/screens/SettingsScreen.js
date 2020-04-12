import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import functions from '../global/functions';
import {getStringDeDataHoraPtBr} from '../global/UtilString'

class SettingsScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataDados: new Date(),
            dataSource: [],
        }
    }

    componentDidMount = async () => {
        this.setState({
            dataDados: functions.getDataAtualizacao(),
            dataSource: functions.getJsonDataSource()
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Settings Screen Navigation</Text>
                <Text>Data atualização: {getStringDeDataHoraPtBr(this.state.dataDados)}</Text>
                <Text> Casos Confirmados:&nbsp;
                    {functions.getTotalCasosAtivos(this.state.dataSource)}
                </Text>
                <Text> Óbitos:&nbsp;
                    {functions.getTotalObitos(this.state.dataSource)}
                </Text>
            </View>
        );
    }
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})