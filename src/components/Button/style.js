import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,        
        elevation: 5
    },
    content: {
        padding: 12,
        borderRadius: 50
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    }
});