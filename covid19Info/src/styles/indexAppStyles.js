import {StyleSheet} from 'react-native'
import commonStyles from './commonStyles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroud: {
        flex: 1,
    },
    titleBar: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: commonStyles.margim.topApp,
        paddingHorizontal: commonStyles.padding.horizontal,
    },
    titleBarRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: commonStyles.padding.horizontal,
        paddingBottom: 5,
        minHeight: 50,
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 40,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
    },
    body:{
        flex: 9,
        backgroundColor: commonStyles.backgrouds.transparenteEscurecido,
    },
    rodape: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 10,
        maxHeight: 15,
    },
    rodapeText: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 14,
    }
})
export default styles