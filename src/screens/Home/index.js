import React from 'react';
import { View, Image } from 'react-native';
import Header from '../../components/Header';
import style from './style';

function Home(){
    return (
        <View style={style.container}>
            <Header />
        </View>
    )
}

export default Home;