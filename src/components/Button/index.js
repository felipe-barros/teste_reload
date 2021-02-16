import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

function Button({ title, onPress, containerStyle}) {

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[style.container, containerStyle]}>
            <LinearGradient
                colors={['#4a54df', '#15d4d8']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
             style={style.content}>
                <Text style={style.title}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Button;