import React from 'react';
import { View, Image, Text } from 'react-native';
import Header from '../../components/Header';
import style from './style';

function Home() {
    const mainImgSrc = require('../../../assets/img/ilustration_lifestyle.png');

    return (
        <View style={style.container}>
            <Header />
            <View style={style.imageContainer}>
                <Image source={mainImgSrc} style={style.mainImage} />
                <View style={style.textContainer}>
                    <Text style={style.title}>Lifestyle</Text>
                    <Text style={style.subTitle}>Get a holistic view of your activities to enhance your wellbeing and benefit from even more accurate recommendations.</Text>
                </View>
            </View>
        </View>
    )
}

export default Home;