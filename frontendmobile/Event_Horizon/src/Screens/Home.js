import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import styles from '../Stylesheet/stylesheet';

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
            <Text style={styles.TextStyle}>Hello World!</Text>
            <Calendar
                enableSwipeMonths
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    margin: '2%',
                }}
                onDayPress={handleDayPress}
                markedDates={{
                    // Marked dates logic here
                }}
            />
        </View>
    );
};

export default Home;
