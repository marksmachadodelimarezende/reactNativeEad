import {StyleSheet} from 'react-native'
import commonStyles from './commonStyles'

const preventionsStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    stretch: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
    },
    textImg: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 18,
        paddingHorizontal: commonStyles.padding.horizontal,
        width: '80%'
    },
  });

  export default preventionsStyles