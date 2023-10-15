import React, { useRef, useState } from 'react';
import { View, Text, DrawerLayoutAndroid, TouchableHighlight, ScrollView, FlatList, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import styles from '../Stylesheet/stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

import NavBar from '../Components/navbar';

const mobileW = Dimensions.get('window').width;

const DummyData = [
    { key: "1", type: "A" },
    // { key: "2", type: "A" },
    { key: "3", type: "A" },
];

const DummyData1 = [
    { key: "4", type: "N" },
    { key: "5", type: "N" },
    { key: "6", type: "N" },
];

const mergedData = [...DummyData, ...DummyData1];

const Home = () => {
    const navigator = useNavigation();

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[today.getDay()];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = months[today.getMonth()];

    const handleDayPress = async (day) => {

        // Perform any asynchronous operations here if needed
        await someAsyncOperation();

        // Navigate to the next screen
        navigator.navigate('EHome', { date: day.dateString });
    };

    const renderEventCard = ({ item }) => {
        return (
            <View style={{
                borderWidth: 1, borderColor: 'lightgray', marginHorizontal: '2%', padding: 10, flexDirection: 'row',
                borderRadius: 5,
            }}>
                <View style={{ height: 20, width: 20, borderRadius: 20, alignSelf: 'center', backgroundColor: (item.type == 'A') ? 'red' : 'rgba(62, 168, 232,1)' }} />
                <View style={{ alignContent: 'center', justifyContent: 'center', marginLeft: '5%' }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '400' }}>Event Name</Text>
                    <Text style={{ color: 'gray', fontSize: 14 }}>Venue</Text>
                </View>
            </View>
        );
    };

    const flatListItemSeparator = () => {
        return <View style={{ height: mobileW * 0.01 }} />;
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
                <Text style={[styles.TextStyle, { marginLeft: '2%', fontWeight: '600', marginVertical: 20, fontFamily: 'Montserrat', }]}>{currentDay + ", " + date + ' ' + currentMonth + " " + year}</Text>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    {/* <Icon name='calendar-outline' size={24} color="rgba(0, 0, 0, .7)" style={{ marginLeft: '2%', alignSelf: 'center' }} /> */}
                    <Text style={[styles.TextStyle, { marginLeft: '2%', fontWeight: '400' }]}>Today's Event </Text>
                </View>
                <View style={{ height: mobileW * 0.72 }}>
                    <FlatList
                        data={mergedData}
                        renderItem={renderEventCard}
                        keyExtractor={(item) => item.key.toString()}
                        ItemSeparatorComponent={flatListItemSeparator}
                    />
                </View>
            </View>
            {/* <BNavBar onPress={() => { drawer.current.openDrawer() }} /> */}
        </View>
    );
};

export default Home;
