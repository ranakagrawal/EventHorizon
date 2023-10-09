import { StyleSheet, Dimensions } from 'react-native';

let mobileW = Dimensions.get('window').width;
const mobileh = Dimensions.get('window').height;

const EventStyles = StyleSheet.create({
    TitleTextStyle: {
        color: 'black',
        fontSize: mobileW * 0.05,
        fontWeight: 'bold',
    },
    DesTextStyle: {
        color: 'gray',
        fontSize: mobileW * 0.04,
    },
    TimeTextStyle: {
        color: 'black',
        fontSize: mobileW * 0.035,
    },
    eventItem: {
        // padding: 10,
        borderBottomWidth: 1,
        // borderWidth: 1,
        borderColor: '#ddd',
        padding: 7
    },
});

export default EventStyles;