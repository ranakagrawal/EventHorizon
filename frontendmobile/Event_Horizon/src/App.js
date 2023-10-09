import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Modal, DrawerLayoutAndroid, ScrollView, Text, Button, StyleSheet, ActivityIndicator, Dimensions, Switch, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/login';
import EHome from './Screens/EventHome';
import NavBar from './Components/navbar';
import BNavBar from './Components/bottomnavbar';
import DrawerContent from './Components/drawer';

const Stack = createNativeStackNavigator();

const App = () => {
    const drawer = useRef(null);
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={200}
            drawerPosition={'left'}
            renderNavigationView={DrawerContent}>
            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            header: () => <NavBar onPress={() => { drawer.current.openDrawer() }} />,
                        }}
                    />
                    <Stack.Screen name="EHome" component={EHome} options={{
                        header: () => <NavBar onPress={() => { drawer.current.openDrawer() }} />,
                    }} />
                </Stack.Navigator>

            </NavigationContainer>
        </DrawerLayoutAndroid>
    );
};


export default App;