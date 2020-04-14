import React from 'react'
import {View, Text} from 'react-native'
import aboutCovidStyles from '../styles/aboutCovid19Styles'

export default props => {
    const texto = {
        pergunta: 'O que é coronavírus? (COVID-19)',
        resposta: 'Coronavírus é uma família de vírus que causam infecções respiratórias. ' +
        'O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. ' +
        'Provoca a doença chamada de coronavírus (COVID-19).\n\n' +
        'Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. ' +
        'No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.\n\n' +
        'A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectarem com o tipo mais comum do vírus. ' +
        'Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1...',
    }

    return(
        <View style={aboutCovidStyles.container}>
            <Text style={aboutCovidStyles.title}>{texto.pergunta}</Text>
            <Text style={aboutCovidStyles.subtitle}>{texto.resposta}</Text>                
        </View>
    )
}