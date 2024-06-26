import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Modal, DrawerLayoutAndroid, ScrollView, Text, Button, StyleSheet, ActivityIndicator, Dimensions, Switch, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/login';
import EHome from './Screens/EventHome';
import NavBar from './Components/navbar';
import BNavBar from './Components/bottomnavbar';
import Stacknav from './stacknav';

const Stack = createNativeStackNavigator();

const App = () => {
    const drawer = useRef(null);
    return (
        <Stacknav />
    );
};


export default App;