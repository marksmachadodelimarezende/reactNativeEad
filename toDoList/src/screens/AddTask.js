import React, {Component} from 'react'
import {
    Modal,
    View, 
    Text,
    TextInput,
    DatePickerIOS,
    DatePickerAndroid,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import styles from './addTaskStyles'

const initialState = {desc: '', date: new Date() }

export default class AddTask extends Component {
    state = {...initialState}

    save = () => {
        if(!this.state.desc.trim()){
            Alert.alert('Dados inválidos', 'Informe uma descrição para salvar!')
            return
        }
        const data = {...this.state }
        this.props.onSave(data)
        this.setState({...initialState})
    }

    handleDateAndroidChanged = () => {
        DatePickerAndroid.open({
            date: this.state.date
        }).then(e => {
            if(e.action !== DatePickerAndroid.dismissedAction) {
                const momentDate = moment(this.state.date)
                momentDate.date(e.day)
                momentDate.month(e.month)
                momentDate.year(e.year)
                this.setState({date: momentDate.toDate()})
            }
        })
    }

    render() {
        let datePicker = null
        if(Platform.OS === 'ios'){
            datePicker = <DatePickerIOS mode='date' date={this.state.date}
                            onDateChange={date => this.setState({ date })} />
        } else {
            datePicker = (
                <TouchableOpacity onPress={this.handleDateAndroidChanged}>
                    <Text style={styles.date}>
                        {moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')}
                    </Text>
                </TouchableOpacity>
            )
        }
        return(
            <Modal onRequestClose={this.props.onCancel} 
                visible={this.props.isVisible} 
                animationType='slide' transparent={true}>
                
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>

                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>

                    <TextInput placeholder="Descrição..." style={styles.input}
                        onChangeText={desc => this.setState({ desc })}
                        value={this.state.desc} />

                    {datePicker}

                    <View style={styles.rodape}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}