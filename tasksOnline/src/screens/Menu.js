import React from 'react'
import { ScrollView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles'

export default props => {
    const optionsGravatar = {
        email: props.navigation.getParam('email'),
        secure: true
    }

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('AuthOrApp')
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks Online</Text>
                <Gravatar style={styles.avatar} options={optionsGravatar} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <View style={styles.userInfo}>
                        <Text style={styles.userNameInfo}>{props.navigation.getParam('name')}</Text>
                        <Text style={styles.userEmailInfo}>{props.navigation.getParam('email')}</Text>
                    </View>
                    <TouchableOpacity onPress={logout}>
                        <View style={styles.logoutIcon}>
                            <Icon name='sign-out' size={30} color='#800' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center'
    },
    title: {
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: Platform.OS === 'ios' ? 60 : 30,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
        backgroundColor: '#222'
    },
    userInfo: {
        fontFamily: commonStyles.fontFamily,
        marginLeft: 10,
    },
    userNameInfo: {
        fontSize: 20,
        marginBottom: 5,
        color: commonStyles.colors.mainText,
    },
    userEmailInfo: {
        fontSize: 15,
        marginBottom: 5,
        color: commonStyles.colors.subText,
    },
    logoutIcon: {
        marginLeft: 10,
        marginTop: 10,
        justifyContent: 'center'
    }
})