import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

function Avatar({onPress}) {
    const imgSrc = require('../../../assets/img/user.jpg');

    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
         style={style.container}>
            <Image source={imgSrc} style={style.img} />
            <LinearGradient colors={['#4a54df', '#15d4d8']} style={style.mark}>
                <Icon name='menu-outline' size={22} color='#FFF'/>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Avatar;