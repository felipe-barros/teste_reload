import React from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import style from './style';

function CalendarModal({ onDismiss, isVisible }) {
    return (
        <Modal
            visible={isVisible}
            swipeDirection='down'
            onSwipeComplete={onDismiss}
            style={{margin: 0}}
        >
            <View style={style.container}>
                <View style={style.content}>
                    <View style={style.header}>
                        <Icon name='ios-close' size={30} color='gray' />
                        <Text style={style.title}>Calendar</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CalendarModal;