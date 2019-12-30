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
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    tasksContainer: {
        flex: 9,
    },
    iconBar: {
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconBarText: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 15,
        fontStyle: 'italic',
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