// CustomDrawer.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ navigation }) => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                    {/* Add your custom drawer content here */}
                    <View style={{ marginVertical: 20, marginLeft: 10 }}>
                        <DrawerItem
                            label="Option 1"
                            onPress={() => {
                                // Add the functionality for this menu option
                                navigation.closeDrawer(); // Close the drawer when an option is pressed
                            }}
                            icon={({ focused, color, size }) => <MaterialIcons name="option-1-icon" size={size} color={color} />}
                        />
                        {/* Add more menu options as needed */}
                    </View>
                </DrawerContentScrollView>
            )}
        >
            {/* Define your main screen here */}
        </Drawer.Navigator>
    );
};

export default CustomDrawer;
