import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { CalendarProvider, Agenda } from 'react-native-calendars';
import styles from '../Stylesheet/stylesheet';
import EventStyles from '../Stylesheet/eventpagestyle';

const EHome = ({ route }) => {
    const [selectedDate, setSelectedDate] = useState(route.params.date);
    const events = {
        '2023-10-09': [
            { title: 'Meeting', description: 'Discuss project', startTime: '09:00 AM', endTime: '10:00 AM' },
            { title: 'Lunch', description: 'Restaurant name', startTime: '12:00 PM', endTime: '01:00 PM' },
        ],
        '2023-10-10': [
            { title: 'Conference', description: 'Conference details', startTime: '10:00 AM', endTime: '04:00 PM' },
        ],
        '2023-10-12': [
            { title: 'Event 1', description: 'Event 1 details', startTime: '02:00 PM', endTime: '03:00 PM' },
            { title: 'Event 2', description: 'Event 2 details', startTime: '04:00 PM', endTime: '05:00 PM' },
        ],
    };

    // Calculate start date as selectedDate - 15 days
    const startDate = new Date(selectedDate);
    startDate.setDate(startDate.getDate());
    const formattedStartDate = startDate.toISOString().split('T')[0];

    // Calculate end date as selectedDate + 15 days
    const endDate = new Date(selectedDate);
    endDate.setDate(endDate.getDate() + 30);
    const formattedEndDate = endDate.toISOString().split('T')[0];

    // Update the selected date when route.params.date changes
    useEffect(() => {
        setSelectedDate(route.params.date);
    }, [route.params.date]);

    // Generate a range of dates for the agenda
    const dateRange = {};
    let currentDate = formattedStartDate;
    while (currentDate <= formattedEndDate) {
        dateRange[currentDate] = [];
        currentDate = new Date(currentDate);
        currentDate.setDate(currentDate.getDate() + 1);
        currentDate = currentDate.toISOString().split('T')[0];
    }

    // Merge events into the date range
    for (const date in events) {
        if (dateRange[date]) {
            dateRange[date] = events[date];
        }
    }

    return (
        <View style={styles.AppBg}>
            <Agenda
                items={dateRange}
                onDayPress={(day) => { setSelectedDate(day.dateString) }}
                selected={selectedDate}
                renderItem={(item) => (
                    <View style={EventStyles.eventItem}>
                        <Text style={EventStyles.TitleTextStyle}>{item.title}</Text>
                        <Text style={EventStyles.DesTextStyle}>{item.description}</Text>
                        <Text style={EventStyles.TimeTextStyle}>{item.startTime} - {item.endTime}</Text>
                    </View>
                )}
                rowHasChanged={(r1, r2) => r1 !== r2}
            />
        </View>
    );
};

export default EHome;
