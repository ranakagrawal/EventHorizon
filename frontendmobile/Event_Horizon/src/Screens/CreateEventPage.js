import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';

const mobileW = Dimensions.get('window').width;

const dummyVenues = [
    { id: 1, name: 'Venue 1', value: 'venue-1', bookedDates: ['2023-10-25'] },
    { id: 2, name: 'Venue 2', value: 'venue-2', bookedDates: ['2023-10-20', '2023-10-22'] },
    { id: 3, name: 'Venue 3', value: 'venue-3', bookedDates: [] },
];

const CreateEventPage = () => {
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [logoImage, setLogoImage] = useState(null);
    const [eventPoster, setEventPoster] = useState(null);
    const [selectedVenue, setSelectedVenue] = useState(dummyVenues[0].value);
    const [selectedDate, setSelectedDate] = useState(null);
    const [disabledDate, setDisabledDate] = useState(null);
    const [markedDates, setMarkedDates] = useState(null);

    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];


    // const handleLogoImageUpload = (event) => {
    //     const selectedImage = event.target.files[0];
    //     setLogoImage(URL.createObjectURL(selectedImage));
    // };

    useEffect(() => {
        // Find the selected venue's booked dates
        const venue = dummyVenues.find((venue) => venue.value === selectedVenue);
        if (venue) {
            console.log(selectedVenue);
            setDisabledDate(venue.bookedDates);
            setSelectedDate(null);
        }
    }, [selectedVenue]);

    useEffect(() => {
        console.log(disabledDate);
        if (disabledDate) {
            setMarkedDates(
                disabledDate.reduce((result, date) => {
                    result[date] = { disabled: true };
                    return result;
                }, {}))
        }
    }, [disabledDate]);

    const handleDayPress = (date) => {
        setSelectedDate(date.dateString);
    };

    useEffect(() => {
        console.log(selectedDate);
    }, [selectedDate]);


    const renderPickerItems = () => {
        return dummyVenues.map((item) => (
            <Picker.Item key={item.id} value={item.value} label={item.name} />
        ));
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Create Event</Text>

            {/* Event Namee input */}
            <Text style={styles.label}>Event Name :</Text>
            <TextInput
                color={'black'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                style={styles.input}
                onChangeText={setEventName}
                value={eventName}
                placeholder={'Enter Event Name'}
            />

            {/* Event desc input */}
            <Text style={styles.label}>Description :</Text>
            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                value={description}
                multiline={true}
                numberOfLines={10}
                placeholder={'Enter Event Description'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
            />
            {/* Organizers Club name input */}
            <Text style={styles.label}>Organized By:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setOrganizer}
                value={organizer}
                placeholder={'Enter Organizer Name'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
            />



            <Text style={styles.label}>Select Venue</Text>
            <Picker
                selectedValue={selectedVenue}
                onValueChange={(itemValue) => setSelectedVenue(itemValue)}
                style={styles.picker}
            >
                {renderPickerItems()}
            </Picker>
            <Text style={styles.label}>Select Date</Text>
            {/* {
                disabledDate ? <DatePicker
                    style={styles.datePicker}
                    date={selectedDate}
                    onDateChange={(date) => setSelectedDate(date)}
                    mode="date"
                    format="YYYY-MM-DD"
                    minimumDate={new Date()}
                    disabled={disabledDate}
                /> : null
            } */}
            <Calendar
                enableSwipeMonths
                onDayPress={handleDayPress}
                style={{
                    borderWidth: 2,
                    borderColor: 'gray',
                    margin: mobileW * 0.04,
                    borderRadius: 5,
                }}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: 'rgba(62, 168, 232, 1)' }, // Adjust the color as needed
                    ...markedDates, // Include other marked dates
                }}
                minDate={formattedToday}
            />
            <TouchableOpacity style={styles.Button}
                onPress={() => {
                    alert(`Requested for ${selectedVenue} at ${selectedDate}`);
                }}
                disabled={selectedDate ? false : true}
            >
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: mobileW * .05,
                    color: 'white'
                }}>Create Event</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 28,
        marginTop: 10,
        color: 'black',
        marginLeft: mobileW * 0.04,
        fontWeight: '800',
        alignSelf: 'center'
    },
    label: {
        fontSize: 20,
        marginTop: 5,
        color: 'black',
        marginLeft: mobileW * 0.04,
        fontWeight: '600',
    },
    picker: {
        margin: mobileW * 0.04,
        color: 'white',
        backgroundColor: 'rgba(62, 168, 232, 1)',
        borderRadius: 30,
    },
    datePicker: {
        width: mobileW,
        marginTop: 20,
        backgroundColor: 'rgba(62, 168, 232, 1)'
    },
    Button: {
        backgroundColor: 'rgba(4, 128, 200, 0.9)',
        height: mobileW * .1,
        width: mobileW * .4,
        borderRadius: mobileW * .02,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: mobileW * .05
    },
    input: {
        borderColor: 'rgba(61,156,211,0.5)',
        borderWidth: mobileW * .005,
        marginHorizontal: mobileW * 0.04,
        borderRadius: 10,
    },
});

export default CreateEventPage;