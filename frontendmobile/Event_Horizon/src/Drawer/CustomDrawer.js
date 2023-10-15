// DrawerContent.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose a different icon library

const mobileW = Dimensions.get('window').width;

const CustomDrawer = () => {

    const navigator = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ height: mobileW * .18, width: mobileW * 0.7, alignSelf: 'center' }}>
                <Image
                    source={require('./../../assets/Logo/logofull.png')}
                    style={{ height: mobileW * .18, resizeMode: 'contain', width: mobileW * 0.7 }}
                />
            </View>
            <CustomTouchable text="Home" onClick={() => { navigator.navigate('Home'); }} icon={'home'} />
            <CustomTouchable text="EventPage" onClick={() => { navigator.navigate('EventPage'); }} icon={'home'} />
            <CustomTouchable text="Logout" onClick={() => {
                navigator.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }} icon={'home'} />
        </View >
    );
}

const CustomTouchable = ({ text, onClick, icon }) => {
    return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={onClick}
        >
            <View style={styles.buttonContainer}>
                <Icon name={icon} size={24} color="black" style={{ marginRight: 10 }} />
                <Text style={styles.text}>{text}</Text>
            </View>
            {/* <Icon name={icon} size={24} color="black" />
            <Text style={styles.text}>{text}</Text> */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: 'white', // Add a white background color
        // borderRadius: 10, // Adjust the border radius as needed
        // elevation: 3, // Adjust the elevation as needed
        padding: 10,
        marginVertical: 3,
        // marginHorizontal: 15,
        // borderWidth: 2
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(62, 168, 232, .8)',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomDrawer;
