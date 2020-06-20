import { Alert, Platform } from 'react-native'

const ipServer = Platform.OS === 'ios' ? 'localhost' : '192.168.0.5'
const portServer = 3000
const urlServer = `http://${ipServer}:${portServer}`

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

function showSucess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { urlServer, showError, showSucess }