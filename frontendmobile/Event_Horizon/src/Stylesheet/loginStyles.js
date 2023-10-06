import { StyleSheet, Dimensions } from 'react-native';

let mobileW = Dimensions.get('window').width;
const mobileh = Dimensions.get('window').height;

const LoginStyles = StyleSheet.create({
    TextStyle: {

    },
    SignUp: {
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    LoignButton: {
        backgroundColor: 'rgba(4, 128, 200, 0.9)',
        height: mobileW * .1,
        width: mobileW * .3,
        borderRadius: mobileW * .02,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center',
        margin: mobileW * .05
    },
    Warning: {
        marginTop: mobileW * .01,
        marginLeft: mobileW * .1,
        marginRight: mobileW * .1,
        color: 'red',
        fontSize: mobileW * .03,
        fontWeight: '400'
    },
    Box: {
        flexDirection: 'row',
        borderColor: 'rgba(61,156,211,0.5)',
        borderWidth: mobileW * .005,
        marginLeft: mobileW * .1,
        marginRight: mobileW * .1,
        marginTop: mobileW * .05,
        borderRadius: 10,
    },
    container: {
        width: mobileW,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
    },
    Hedding: {
        alignSelf: 'center',
        fontWeight: '900',
        fontSize: mobileW * .1,
        color: 'black',
    },
    Login: {
        marginLeft: mobileW * .1,
        fontWeight: '900',
        fontSize: mobileW * .1,
        color: 'rgb(73, 71, 110)',
    },
    LoginDesc: {
        marginLeft: mobileW * .1,
        fontWeight: '600',
        fontSize: mobileW * .05,
        color: 'grey',
    },
});

export default LoginStyles;