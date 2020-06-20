import React, { Component } from 'react'
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native'
import styles from './authStyles'
import LoginImage from '../../assets/imgs/login.jpg'

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

    checkLogin = () => {
        Keyboard.dismiss()
        console.log(this.state)
    }

    getFieldName = () => this.state.stageNew &&
        <TextInput placeholder='Name' value={this.state.name} style={styles.input}
            onChangeText={value => this.setName(value)}></TextInput>

    getFieldEmail = () =>
        <TextInput placeholder='E-Mail' value={this.state.email} style={styles.input}
            onChangeText={value => this.setEmail(value)}></TextInput>

    getFieldPassword = () =>
        <TextInput placeholder='Password' value={this.state.password} style={styles.input}
            onChangeText={value => this.setPassword(value)} secureTextEntry={true}></TextInput>


    getFieldConfirmPassword = () => this.state.stageNew &&
        <TextInput placeholder='Confirm Password' value={this.state.confirmPassword} style={styles.input}
            onChangeText={value => this.setConfirmPassword(value)} secureTextEntry={true}></TextInput>

    getLabelButtonAuth = () => this.state.stageNew ? 'Registrar' : 'Entrar'

    getButtonAuth = () => {
        return (
            <TouchableOpacity onPress={this.checkLogin}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{this.getLabelButtonAuth()}</Text>
                </View>
            </TouchableOpacity>)
    }

    getLabeSubtitle = () => this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'

    getSubtitle = () => (<Text style={styles.subtitle}>{this.getLabeSubtitle()}</Text>)

    getToggleButtonStageNew = () => {
        return (
            <TouchableOpacity onPress={this.setStageNew} style={{ padding: 20}}>
                <Text style={styles.buttonText}>
                    {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ImageBackground source={LoginImage} style={styles.background}>
                <Text style={styles.title}>
                    Tasks
                </Text>
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
}
