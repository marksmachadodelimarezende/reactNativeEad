import React, { Component } from 'react'
import { ImageBackground, Text, View, TouchableOpacity, Keyboard, Alert } from 'react-native'
import styles from './authStyles'
import LoginImage from '../../assets/imgs/login.jpg'
import AuthInput from '../componentes/AuthInput'
import { urlServer, showError, showSucess } from '../services/commonServices'
import axios from 'axios'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
}
let stateStageNew = false
export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = initialState

        this.setName = this.setName.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setConfirmPassword = this.setConfirmPassword.bind(this)
        this.setStageNew = this.setStageNew.bind(this)
    }

    setName = (name) => this.setState({ name })
    setEmail = (email) => this.setState({ email })
    setPassword = (password) => this.setState({ password })
    setConfirmPassword = (confirmPassword) => this.setState({ confirmPassword })
    setStageNew = () => {
        stateStageNew = !stateStageNew
        this.setState({ stageNew: stateStageNew })
    }

    signinOrSignup = () => {
        Keyboard.dismiss()
        if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    signup = async () => {
        try {
            await axios.post(`${urlServer}/signup`, this.state)
            showSucess('Usuário cadastrad com sucesso!')
            this.setState({ ...initialState })
        } catch (e) {
            showError(e)
        }
    }

    signin = async () =>{
        try {
            const res = await axios.post(`${urlServer}/signin`, this.state)
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            this.props.navigation.navigate('Home')
        }catch(e){
            showError(e)
        }
    }

    render() {
        return (
            <ImageBackground source={LoginImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    {this.getSubtitle()}
                    {this.getFieldName()}
                    {this.getFieldEmail()}
                    {this.getFieldPassword()}
                    {this.getFieldConfirmPassword()}
                    {this.getButtonAuth()}
                </View>
                {this.getToggleButtonStageNew()}
            </ImageBackground>
        )
    }

    getFieldName = () => this.state.stageNew &&
        <AuthInput icon='user' placeholder='Name' value={this.state.name} style={styles.input}
            onChangeText={value => this.setName(value)}></AuthInput>

    getFieldEmail = () =>
        <AuthInput icon='at' placeholder='E-Mail' value={this.state.email} style={styles.input}
            onChangeText={value => this.setEmail(value)}></AuthInput>

    getFieldPassword = () =>
        <AuthInput icon='lock' placeholder='Password' value={this.state.password} style={styles.input}
            onChangeText={value => this.setPassword(value)} secureTextEntry={true}></AuthInput>


    getFieldConfirmPassword = () => this.state.stageNew &&
        <AuthInput icon='lock' placeholder='Confirm Password' value={this.state.confirmPassword} style={styles.input}
            onChangeText={value => this.setConfirmPassword(value)} secureTextEntry={true}></AuthInput>

    getLabelButtonAuth = () => this.state.stageNew ? 'Registrar' : 'Entrar'

    getButtonAuth = () => {
        return (
            <TouchableOpacity onPress={this.signinOrSignup}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{this.getLabelButtonAuth()}</Text>
                </View>
            </TouchableOpacity>)
    }

    getLabeSubtitle = () => this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'

    getSubtitle = () => (<Text style={styles.subtitle}>{this.getLabeSubtitle()}</Text>)

    getToggleButtonStageNew = () => {
        return (
            <TouchableOpacity onPress={this.setStageNew} style={{ padding: 20 }}>
                <Text style={styles.buttonText}>
                    {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                </Text>
            </TouchableOpacity>
        )
    }
}
