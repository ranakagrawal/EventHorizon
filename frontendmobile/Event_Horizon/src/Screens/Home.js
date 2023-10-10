import React, { useRef, useState } from 'react';
import { View, Text, DrawerLayoutAndroid, TouchableHighlight } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import styles from '../Stylesheet/stylesheet';
import NavBar from '../Components/navbar';

const Home = () => {
    const navigator = useNavigation();

    const handleDayPress = async (day) => {

        // Perform any asynchronous operations here if needed
        await someAsyncOperation();

        // Navigate to the next screen
        navigator.navigate('EHome', { date: day.dateString });
    };

    const someAsyncOperation = async () => {
        // Simulate an asynchronous operation (e.g., API call)
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Async operation completed');
                resolve();
            }, 1000); // Simulate a delay of 1 second
        });
    };

    return (
        <View style={styles.AppBg}>
            {/* <NavBar onPress={() => { navigator.openDrawer() }} /> */}
            {/* <NavBar /> */}
            {/* <Text style={styles.TextStyle}>Hello World!</Text> */}
            <View style={styles.AppBg}>
                <Calendar
                    enableSwipeMonths
                    style={{
                        borderWidth: 2,
                        borderColor: 'gray',
                        margin: '2%',
                        borderRadius: 5,
                    }}
                    onDayPress={handleDayPress}
                    markedDates={{
                        // Marked dates logic here
                    }}
                />
                <Text style={styles.TextStyle}>Today's Event</Text>
            </View>
            {/* <BNavBar onPress={() => { drawer.current.openDrawer() }} /> */}
        </View>
    );
};

export default Home;
