import { StyleSheet, Dimensions } from 'react-native';

let mobileW = Dimensions.get('window').width;
const mobileh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    AppBg: {
        flex: 1,
        backgroundColor: 'white',
    },
    TextStyle: {
        color: 'black',
        fontSize: 24,
    },
    eventItem: {
        // padding: 10,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    emptyDate: {
        alignContent: 'center',
        alignSelf: 'center'
    },
});

export default styles;