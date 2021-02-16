import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import style from './style';

function MessageButton(){
    const imgSrc = require('../../../assets/img/chat.png');

    function onTouch(){
        Alert.alert("Mensagens.", "Visualizar mensagens.");
    }

    return (
        <TouchableOpacity 
        onPress={onTouch}
        activeOpacity={0.8} 
        style={style.container}>
            <Image source={imgSrc} style={style.img}/>
            <View style={style.mark}/>
        </TouchableOpacity>
    )
}

export default MessageButton;