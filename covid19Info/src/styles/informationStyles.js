import {StyleSheet} from 'react-native'
import commonStyles from './commonStyles'

const informationStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: commonStyles.padding.horizontal,
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 18,
        textAlign: 'justify',
        paddingHorizontal: commonStyles.padding.horizontal,
    },
})
export default informationStyles