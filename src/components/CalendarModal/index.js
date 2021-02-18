import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Text from '../pText';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import Button from "../Button";
import CalendarPicker from 'react-native-calendar-picker';
import style from './style';

function CalendarModal({ onDismiss, isVisible, onSubmit }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function onDayPress(day) {
        setSelectedData(day.dateString);
    };

    function onSubmitDate() {
        onSubmit(selectedData);
    }

    function onDateChange(date, type) {
        if (type === 'END_DATE') {
            setEndDate(date);
        } else {
            setStartDate(date);
            setEndDate(null)
        }
    }

    const minDate = new Date(2001, 1, 1); // Today's date
    const maxDate = new Date(2022, 11, 31); // Next year

    // Data para impressão
    const strStartDate = startDate ? startDate.toString() : 'Ainda não selecionada';
    const strEndDate = endDate ? endDate.toString() : 'Ainda não selecionada';

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
                            <Icon name='ios-close' size={30} color='#363636' />
                        </TouchableOpacity>
                        <Text style={style.title}>Calendar</Text>
                    </View>
                    <View style={style.calendarContainer}>
                        <CalendarPicker
                            allowRangeSelection={true}
                            minDate={minDate}
                            maxDate={maxDate}
                            todayBackgroundColor="green"
                            selectedDayColor="#66ff33"
                            selectedDayTextColor="#000000"
                            scaleFactor={375}
                            textStyle={{
                                // fontFamily: 'Cochin',
                                color: '#000000',
                            }}
                            previousComponent={<Icon name='arrow-back-outline' color='gray' size={25} />}
                            nextComponent={<Icon name='arrow-forward-outline' color='gray' size={25} />}
                            onDateChange={onDateChange}
                        />
                    </View>
                    <Button title='Apply' onPress={onSubmitDate} />
                    <View style={style.dateContainer}>
                        <Text style={style.dateText}>Data de Início: {strStartDate}</Text>
                        <Text style={style.dateText}>Data de Fim: {strEndDate}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CalendarModal;