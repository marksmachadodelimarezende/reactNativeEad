import {StyleSheet, Platform} from 'react-native'
import commonStyles from '../commonStyles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroud: {
        flex: 2,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 5,
        paddingHorizontal: 20,
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
    tasksContainer: {
        flex: 8,
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    iconBarText: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        fontStyle: 'italic',
        paddingEnd: 15,
    },
    actionButtonIcon: {
        fontSize: 25,
        height: 22,
        backgroundColor: commonStyles.colors.transparent,
        color: 'black',
      },
    actionButtonItemsIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
})

export default styles