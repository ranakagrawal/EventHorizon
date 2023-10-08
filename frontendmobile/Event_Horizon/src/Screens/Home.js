import React, { useState, useEffect } from 'react';
import { View, FlatList, Modal, ScrollView, Text, Button, StyleSheet, ActivityIndicator, Dimensions, Switch, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from '../Stylesheet/stylesheet';



const Home = () => {

    const [selected, setSelected] = useState('');


    return (
        <View style={styles.AppBg}>
            <Text style={styles.TextStyle}>Hello World!</Text>
            <Calendar
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    margin: '2%',
                }}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    '2023-10-16': { selected: true, marked: true, selectedColor: 'blue' },
                    '2023-10-17': { marked: true },
                    '2023-10-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                    '2023-10-19': { disabled: true, disableTouchEvent: true }
                }}
            />
        </View>
    );
};


export default Home;