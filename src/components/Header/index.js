import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import Avatar from '../Avatar';
import MessageButton from '../MessageButton';
import Logo from '../Logo';
import style from './style';

function Header(){
    return (
        <View style={style.container}>
            <SafeAreaView />
            <View style={style.content}>
                <Avatar />
                <Logo />
                <MessageButton />
            </View>
        </View>
    )
}

export default Header;