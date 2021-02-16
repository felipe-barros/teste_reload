import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Avatar from '../Avatar';
import MessageButton from '../MessageButton';
import Logo from '../Logo';
import style from './style';

function Header({onTouchAvatar, onTouchChat}){
    return (
        <View style={style.container}>
            <SafeAreaView />
            <View style={style.content}>
                <Avatar onPress={onTouchAvatar}/>
                <Logo />
                <MessageButton onPress={onTouchChat}/>
            </View>
        </View>
    )
}

export default Header;