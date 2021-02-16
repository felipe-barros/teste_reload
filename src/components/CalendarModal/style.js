import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
    },
    content: {
        marginTop: Dimensions.get('window').height * 0.4,
        flex: 1,
        backgroundColor: '#FFF',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10
    },
    calendarContainer: {
        marginBottom: 10
    }
});