// DrawerContent.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DrawerContent = () => {

    // const navigator = useNavigation();

    return (
        <View>
            <Text>Drawer Header</Text>
            <TouchableOpacity onPress={() => { navigator.navigate('Home'); }} >
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigator.navigate('Login'); }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DrawerContent;
