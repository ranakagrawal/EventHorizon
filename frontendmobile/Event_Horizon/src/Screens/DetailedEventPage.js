import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


let mobileW = Dimensions.get('window').width;

const DetailedEventPage = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item.EPoster }}
                style={styles.eventImage}
            />
            <Text style={styles.eventName}>{item.EName}</Text>
            <Text style={styles.club}>Organized By: {item.Club}</Text>
            <Text style={styles.registeredStudents}>{item.RegisteredStudents} Registered</Text>
            <Text style={styles.lastDate}>Last Date to Register: {item.LastDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    eventImage: {
        width: mobileW * 0.5,
        height: mobileW * 0.5,
        resizeMode: 'contain',
        marginTop: mobileW * 0.1,
    },
    eventName: {
        color: 'black',
        fontSize: mobileW * 0.06,
        fontWeight: 'bold',
        marginTop: mobileW * 0.05,
    },
    club: {
        color: 'black',
        fontSize: mobileW * 0.04,
        fontWeight: '600',
        marginTop: mobileW * 0.02,
    },
    registeredStudents: {

        color: 'black',
        fontSize: mobileW * 0.03,
        fontWeight: '500',
        marginTop: mobileW * 0.02,
    },
    lastDate: {

        color: 'black',
        fontSize: mobileW * 0.03,
        fontWeight: '500',
        marginTop: mobileW * 0.02,
    },
});

export default DetailedEventPage;
