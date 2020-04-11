import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import preventionsStyles from '../styles/preventionsStyles'

class Preventions extends Component {
    render() {
        return (
            <View>
                <View style={preventionsStyles.container}>
                    <Image
                        style={preventionsStyles.stretch}
                        source={require('../../assets/images/img1-maos.png')}
                    />
                    <Text style={preventionsStyles.textImg}>
                        Lave as mãos com água e sabão ou use álcool em gel.
                    </Text>
                </View>
                <View style={preventionsStyles.container}>
                    <Image
                        style={preventionsStyles.stretch}
                        source={require('../../assets/images/img2-tosse.png')}
                    />
                    <Text style={preventionsStyles.textImg}>
                        Cubra o nariz e boca ao espirrar ou tossir.
                    </Text>
                </View>
                <View style={preventionsStyles.container}>
                    <Image
                        style={preventionsStyles.stretch}
                        source={require('../../assets/images/img3-pessoas.png')}
                    />
                    <Text style={preventionsStyles.textImg}>
                        Evite aglomerações se estiver doente.
                    </Text>
                </View>
                <View style={preventionsStyles.container}>
                    <Image
                        style={preventionsStyles.stretch}
                        source={require('../../assets/images/img4-janela.png')}
                    />
                    <Text style={preventionsStyles.textImg}>
                        Mantenha os ambientes bem ventilados.
                    </Text>
                </View>
                <View style={preventionsStyles.container}>
                    <Image
                        style={preventionsStyles.stretch}
                        source={require('../../assets/images/img5-objetos.png')}
                    />
                    <Text style={preventionsStyles.textImg}>
                        Não compartilhe objetos pessoais.
                    </Text>
                </View>
            </View>
        )
    }
}
export default Preventions