// DrawerContent.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function FDrawerContent() {
    return (
        <View>
            <Text>FDrawer Header</Text>
            <TouchableOpacity >
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FDrawerContent;
