import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import Home from '../Screens/Home';
import NavBar from '../Components/navbar';
import EventPage from '../Screens/EventPage';
import DetailedEventPage from '../Screens/DetailedEventPage';
const Drawer = createDrawerNavigator();
const Xyz = ({ navigation }) => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => <NavBar />,
                }}
            />
            <Drawer.Screen
                name="EventPage"
                component={EventPage}
                options={{
                    header: () => <NavBar />,
                }}
            />
            <Drawer.Screen
                name="DetailedEvent"
                component={DetailedEventPage}
                options={{
                    header: () => <NavBar />,
                }}
            />
        </Drawer.Navigator>
    );
};

export default Xyz;