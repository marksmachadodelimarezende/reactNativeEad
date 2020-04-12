import React, {Component} from 'react'
import {View, Text} from 'react-native'
import functions from '../global/functions';
import informationStyles from '../styles/informationStyles'
import {getStringDeDataHoraPtBr} from '../global/UtilString'

class Informations extends Component {
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
            <View style={informationStyles.container}>
                <Text style={informationStyles.subtitle}>
                    Data atualização: {getStringDeDataHoraPtBr(this.state.dataDados)}
                </Text>
                <Text style={informationStyles.subtitle}> 
                    Casos Confirmados:&nbsp;
                    {functions.getTotalCasosAtivos(this.state.dataSource)}
                </Text>
                <Text style={informationStyles.subtitle}> 
                    Óbitos:&nbsp;
                    {functions.getTotalObitos(this.state.dataSource)}
                </Text>
            </View>
        )
    }
}
export default Informations