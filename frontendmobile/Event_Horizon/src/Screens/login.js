import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStyles from '../Stylesheet/loginStyles';


const mobileW = Dimensions.get('window').width;

const Data = [
    {
        id: '1',
        name: 'Priyansh Gupta',
        Email: 'priyansh@gmail.com',
        password: 'acro@123',
        year: 'fourth',
    },
    {
        id: '2',
        name: 'Murtaza Bohra',
        Email: 'murtaza@gmail.com',
        password: 'acro@123',
        year: 'second',
    },
    {
        id: '3',
        name: 'Ranak Agrawal',
        Email: 'ranak@gmail.com',
        password: 'acro@123',
        year: 'first',
    },
    {
        id: '4',
        name: 'Namit Prajapati',
        Email: 'namit@gmail.com',
        password: 'acro@123',
        year: 'third',
    },
];

const Login = ({ route }) => {

    const navigator = useNavigation();

    const [Email, setEmail] = useState('');
    const [EResult, setEResult] = useState('');
    const [Password, setPassword] = useState('');
    const [PResult, setPResult] = useState('');
    const [Hide, setHide] = useState(true);

    const HideButton = () => {
        setHide(!Hide);
    }

    const goToHome = () => {
        navigator.navigate('Home');
    }

    // const HandleSubmit = () => {
    //     console.log("Handle Submit");
    //     if (Email == '') {
    //         setEResult('Email can\'t be empty')
    //     }
    //     if (Password == '') {
    //         setPResult('Password can\'t be empty')
    //     }
    //     if (Email != '' && Password != '') {
    //         setEResult('');
    //         setPResult('');
    //         OnSubmit();
    //     }
    // }

    const HandleSubmit = () => {
        if (Email === '') {
            setEResult('Email can\'t be empty');
        } else if (Password === '') {
            setPResult('Password can\'t be empty');
        } else {
            setEResult('');
            setPResult('');
            OnSubmit();
        }
    };

    const OnSubmit = () => {
        console.log("On Submit");
        for (let index = 0; index < Data.length; index++) {
            if (Email === Data[index].Email) {
                if (Password === Data[index].password) {
                    alert(`Welcome ${Data[index].name}`);
                    navigator.navigate('Home', { userData: Data[index] });
                }
                else {
                    setPResult('Incorrect Password');
                }
            }
            // console.log(Id);
            // const element = Data[index];
            // console.log(element);
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View
                    style={[LoginStyles.container]}>
                    <View
                        style={{ marginTop: '3%' }}>
                    </View>
                    <Image
                        source={require('./../../assets/Logo/Logo.png')}
                        style={{ width: mobileW * .8, height: mobileW * .5, resizeMode: 'contain', margin: mobileW * .1, }}
                    />
                    {/* <Text style={[
                        LoginStyles.Hedding
                    ]}>Event Horizon</Text> */}
                    <View
                        style={{ marginTop: '5%' }}>
                    </View>
                    <Text style={[
                        LoginStyles.Login
                    ]}>Login</Text>
                    <Text style={[
                        LoginStyles.LoginDesc
                    ]}>Please sign in to continue.</Text>
                    <View style={[LoginStyles.Box]}>
                        <Image
                            source={require('./../../assets/icons/email.png')}
                            style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1, opacity: 0.5 }}
                        />
                        <TextInput
                            color={'black'}
                            placeholderTextColor={'rgba(0,0,0,0.5)'}
                            value={Email}
                            onChangeText={(Email) => setEmail(Email)}
                            placeholder={'Enter Your Email'}
                            style={{
                                flex: 8
                            }} />
                    </View>
                    {/* <View style={[LoginStyles.Box]}>
                        <TextInput
                            color={'black'}
                            placeholderTextColor={'black'}
                            value={Email}
                            onChangeText={(Email) => setEmail(Email)}
                            placeholder={'Enter Your Email'}
                            style={{
                                flex: 8
                            }} />
                    </View> */}
                    {EResult ? <Text style={[LoginStyles.Warning]}>{EResult}</Text> : null}
                    {/* <Text style={[LoginStyles.Warning]}>{EResult}</Text> */}
                    {/* <View style={[LoginStyles.Box]}>
                        <TextInput
                            color={'black'}
                            placeholderTextColor={'rgba(0,0,0,0.5)'}
                            value={Password}
                            secureTextEntry={Hide}
                            onChangeText={(Password) => setPassword(Password)}
                            placeholder={'Enter Your Password'}
                            style={{
                                flex: 7,
                            }} />
                        <TouchableOpacity onPress={HideButton}><Image
                            source={require('./../../assets/icons/hide.png')}
                            style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1 }}
                        /></TouchableOpacity>
                    </View> */}

                    <View style={[LoginStyles.Box]}>
                        <Image
                            source={require('./../../assets/icons/padlock.png')}
                            style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1, opacity: 0.5 }}
                        />
                        <TextInput
                            color={'black'}
                            placeholderTextColor={'rgba(0,0,0,0.5)'}
                            value={Password}
                            secureTextEntry={Hide}
                            onChangeText={(Password) => setPassword(Password)}
                            placeholder={'Enter Your Password'}
                            style={{
                                flex: 7
                            }} />
                        <TouchableOpacity onPress={HideButton}><Image
                            source={require('./../../assets/icons/hide.png')}
                            style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1, opacity: 0.5 }}
                        /></TouchableOpacity>
                    </View>

                    {PResult ? <Text style={[LoginStyles.Warning]}>{PResult}</Text> : null}

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={[LoginStyles.LoignButton]} onPress={HandleSubmit}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: mobileW * .05,
                                color: 'white'
                            }}>Login</Text>
                        </TouchableOpacity>
                    </View>



                    {/* <View style={{
                        height: mobileW * 0.4
                    }}>
                    </View> */}
                    {/* <View style={[LoginStyles.SignUp]}>
                        <Text style={{ color: 'black' }}>Don't have an account? </Text>
                        <TouchableOpacity><Text style={{ color: 'blue' }}>Sign up</Text></TouchableOpacity>
                    </View>
                    <View style={{
                        height: mobileW * 0.15
                    }}>
                    </View> */}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}


export default Login;