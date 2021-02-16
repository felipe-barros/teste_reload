import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../pText';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import Button from "../Button";
import { Calendar } from 'react-native-calendars';
import style from './style';

function CalendarModal({ onDismiss, isVisible, onSubmit }) {
    const [selectedData, setSelectedData] = useState('');

    function onDayPress(day) {
        setSelectedData(day.dateString);
    };

    function onSubmitDate(){
        onSubmit(selectedData);
    }

    return (
        <Modal
            visible={isVisible}
            swipeDirection='down'
            onSwipeComplete={onDismiss}
            style={{ margin: 0 }}
        >
            <View style={style.container}>
                <View style={style.content}>
                    <View style={style.header}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onDismiss}>
                            <Icon name='ios-close' size={30} color='gray' />
                        </TouchableOpacity>
                        <Text style={style.title}>Calendar</Text>
                    </View>
                    <View style={style.calendarContainer}>
                        <Calendar
                            markingType={'period'}
                            onDayPress={onDayPress}
                            markedDates={{
                                [selectedData]: {
                                    selected: true,
                                    disableTouchEvent: true,
                                    selectedColor: 'dodgerblue',
                                    selectedTextColor: '#FFF',
                                    color: 'dodgerblue',
                                }
                            }}
                        />
                    </View>
                    <Button title='Apply' onPress={onSubmitDate}/>
                </View>
            </View>
        </Modal>
    )
}

export default CalendarModal;