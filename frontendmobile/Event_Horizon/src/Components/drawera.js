// DrawerContent.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function ADrawerContent() {
    return (
        <View>
            <Text>ADrawer Header</Text>
            <TouchableOpacity >
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ADrawerContent;
