import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#FFF',
    },
    mark: {
        position: 'absolute',
        bottom: 0,
        right: -5,
        backgroundColor: 'dodgerblue',
        width: 25,
        height: 25,
        borderRadius: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    }
});