import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import functions from '../global/functions';
import informationStyles from '../styles/informationStyles'
import { getStringDateFormat } from '../global/UtilString'
import GraphicProgressLine from './GraphicProgressLine'

const window = Dimensions.get("window");
const dataSetCasos = functions.getResumoCasosUltimosSeisMeses();
const dataSetObitos = functions.getResumoObitosUltimosSeisMeses();

class Informations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dimensions: {
                window, //width ; heigth
            },
            dataDados: new Date(),
            dataSource: [],
        }
    }

    onChange = ({ window, screen }) => {
        this.setState({ dimensions: { window } });
    };

    componentDidMount = async () => {
        const dadosJson = await functions.getJsonDataSource();
        const casosTotais = functions.getTotalCasosAtivos(dadosJson);
        const obitosTotais = functions.getTotalObitos(dadosJson);
        const percentLetalidade = (obitosTotais * 100 / casosTotais).toFixed(2).toString().replace('.', ',').concat('%');
        this.setState({
            dataDados: functions.getDataAtualizacao(),
            //dataSource: dadosJson,0
            totalCasos: casosTotais,
            totalObitos: obitosTotais,
            percentLetalidade: percentLetalidade,
        });
        Dimensions.addEventListener("change", this.onChange);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onChange);
    }

    render() {
        return (
            <View>
                <View style={informationStyles.container}>
                    <Text style={informationStyles.subtitle}>
                        Atualização: {getStringDateFormat(this.state.dataDados, 'D[/]MM[/]YYYY')}
                    </Text>
                    <Text style={informationStyles.subtitle}>
                        Casos Confirmados:&nbsp;
                    {this.state.totalCasos}
                    </Text>
                    <Text style={informationStyles.subtitle}>
                        Óbitos:&nbsp;
                    {this.state.totalObitos}
                    </Text>
                    <Text style={informationStyles.subtitle}>
                        Letalidade:&nbsp;
                    {this.state.percentLetalidade}
                    </Text>
                </View>
                <View>
                    <GraphicProgressLine title='Casos nos últimos meses'
                        dataSet={dataSetCasos}
                        widthLayout={this.state.dimensions.window.width}/>
                </View>
                <View>
                    <GraphicProgressLine title='Óbitos nos últimos meses'
                        dataSet={dataSetObitos}
                        widthLayout={this.state.dimensions.window.width}/>
                </View>
            </View>

        )
    }
}
export default Informations