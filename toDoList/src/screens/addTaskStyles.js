import {StyleSheet} from 'react-native'
import commonStyles from '../commonStyles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.colors.white,
        justifyContent: 'space-between',
        width: '96%', 
        borderRadius: 10,
    },
    offset: {
        flex: 1,
        backgroundColor: commonStyles.backgrouds.transparenteEscurecido,
    },
    offsetCenter: {
        backgroundColor: commonStyles.backgrouds.transparenteEscurecido, 
        alignItems: 'center',
    },
    button: {
        margin: 10,
        marginRight: 20,
        color: commonStyles.colors.default,
        fontSize: 18,
        borderColor: commonStyles.colors.borderLine,
        backgroundColor: commonStyles.colors.borderLine,
        borderWidth: 0.5,
        padding: 10,
        width: 100,
        borderRadius: 10,
        textAlign: 'center',
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.default,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopColor: commonStyles.colors.borderLine,
        borderTopWidth: 0.7,
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: commonStyles.colors.white,
        borderWidth: 1,
        borderColor: commonStyles.colors.borderLine,
        borderRadius: 6,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: 25,
    },
})

export default styles