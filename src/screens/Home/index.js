import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import Text from '../../components/pText';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CalendarModal from '../../components/CalendarModal';
import style from './style';

function Home() {
    // Indica qual seção está selecionada
    const [isFirstSection, setIsFirstSection] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Referência para a imagem da tela Home
    const mainImgSrc = require('../../../assets/img/ilustration_lifestyle.png');

    // Alterna entre as seções
    function changeSection(value) {
        setIsFirstSection(value);
    }

    // Ao tocar no Avatar
    function onTouchAvatar() {
        Alert.alert("Ver perfil.", "Edite seu perfil de usuário.");
    }

    // Ao tocar no Chat
    function onTouchChat() {
        Alert.alert("Mensagens.", "Visualizar mensagens.");
    }

    // Ao tocar em abrir calendário
    function onTouchOpenCalendar() {
        setIsModalVisible(true);
    }

    // Ao tocar no botão de Apply no calendário
    function onSubmitApply(date) {
        if (date == '')
            Alert.alert("Nenhuma data selecionada.", `Selecione uma data.`);
        else
            Alert.alert("Data selecionada.", `Você selecionou uma data: ${date}`);
    }

    return (
        <>
            <View style={style.container}>
                <Header onTouchAvatar={onTouchAvatar} onTouchChat={onTouchChat} />
                <View style={style.imageContainer}>
                    <Image source={mainImgSrc} style={style.mainImage} />
                    <View style={style.textContainer}>
                        <Text style={style.title}>Lifestyle</Text>
                        <Text style={style.subTitle}>Get a holistic view of your activities to enhance your wellbeing and benefit from even more accurate recommendations.</Text>
                    </View>
                </View>
                <View style={style.sectionContainer}>
                    <View style={style.section}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => changeSection(true)}>
                            <Text style={[style.sectionTitle, isFirstSection ? style.sectionSelected : null]}>Timestamp feed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => changeSection(false)}>
                            <Text style={[style.sectionTitle, !isFirstSection ? style.sectionSelected : null]}>Activity feed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    isFirstSection ? (
                        <View style={style.sectionContent}>
                            <Text style={style.emptyMessage}>Nenhum dado disponível.</Text>
                        </View>
                    ) : (
                            <View style={style.sectionContent}>
                                <Button
                                    title='Open calendar'
                                    onPress={onTouchOpenCalendar}
                                    containerStyle={{ width: '60%' }} />
                            </View>
                        )
                }
            </View>
            <CalendarModal
                onSubmit={onSubmitApply}
                isVisible={isModalVisible}
                onDismiss={() => setIsModalVisible(!isModalVisible)} />
        </>
    )
}

export default Home;