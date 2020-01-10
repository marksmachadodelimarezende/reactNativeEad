import React, {Component} from 'react'
import {
    Text,
    DatePickerIOS,
    DatePickerAndroid,
    Platform,
    TouchableOpacity,
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import styles from './datePickerStyles'

export default class DatePicker extends Component {
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
        return({datePicker})
    }
}