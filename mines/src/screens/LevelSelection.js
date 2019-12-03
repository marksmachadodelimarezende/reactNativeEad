import React from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { styles } from './styles/levelSelectionStyle'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={ true }>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o nível</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Médio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}