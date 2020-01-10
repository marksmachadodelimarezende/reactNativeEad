import {StyleSheet} from 'react-native'
import commonStyles from '../commonStyles'

const styles = StyleSheet.create({
    iconColor: {
        color: commonStyles.colors.secondary,
    },
    container: {
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    done: {
        marginTop: 1.5,
        height: 12,
        width: 12,
        backgroundColor: commonStyles.colors.transparent,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555',
    },
    checkContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    description: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        textAlign: 'justify',
        fontSize: 15,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
        paddingHorizontal: 3,
    },
    dateLastColor: {
        color: commonStyles.colors.red,
    },
    exclude: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    excludeRightContent: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', 
        paddingLeft: 20,
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10,
    },
    checkLeftContent: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20,
    },
});

export default styles