import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    imageContainer: {

    },
    mainImg: {
        position: 'absolute'
    },
    textContainer: {
        position: 'absolute',
        padding: 20,
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        marginBottom: 15
    },
    subTitle: {
        fontSize: 14,
        color: '#FFF'
    },
    sectionContainer: {
        marginTop: 15
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'gray'
    },
    sectionSelected: {
        color: 'dimgray',
        fontWeight: 'bold'
    },
    sectionContent: {
        padding: 20,
        alignItems: 'center'
    },
    emptyMessage: {
        color: 'gray',
        fontSize: 16
    }
})