import React from 'react';
import { Image } from 'react-native';
import style from './style';

function Logo(){
    const imgSrc = require('../../../assets/img/logo.png');

    return (
        <Image source={imgSrc} style={style.img}/>
    )
}

export default Logo;