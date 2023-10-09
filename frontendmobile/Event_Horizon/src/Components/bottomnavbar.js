import React from 'react';
import { View, Text, TouchableHighlight, Dimensions, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

let mobileW = Dimensions.get('window').width;

const BNavBar = ({ onPress }) => {

    const navigator = useNavigation();

    return (
        <View style={{ backgroundColor: 'white' }}>
            {/* <View style={[styles.container, { backgroundColor: 'rgba(255,255,255,0)' }]}></View> */}
            <View style={styles.container}></View>
            <TouchableHighlight style={styles.flottingbutton} onPress={onPress}>
                <MaterialIcons name='menu' size={25} color="white" style={{}} />
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(62, 168, 232,1)',
        height: mobileW * 0.07,
        paddingHorizontal: 10,
    },
    backButton: {
        color: 'white',
        fontSize: 16,
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: "2%"
    },
    flottingbutton: {
        position: 'absolute',
        backgroundColor: 'rgb(122, 119, 185)',
        height: mobileW * 0.15,
        width: mobileW * 0.15,
        marginTop: -35,
        // marginBottom: mobileW * 0.5,
        alignSelf: 'center',
        borderRadius: mobileW * 0.1,
        borderWidth: mobileW * 0.015,
        borderColor: 'white',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export default BNavBar;
