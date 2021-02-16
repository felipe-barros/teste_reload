import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import style from './style';

function MessageButton({onPress}){
    const imgSrc = require('../../../assets/img/chat.png');

    return (
        <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.8} 
        style={style.container}>
            <Image source={imgSrc} style={style.img}/>
            <View style={style.mark}/>
        </TouchableOpacity>
    )
}

export default MessageButton;