import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import { ChevronLeftIcon, EnvelopeIcon, EyeSlashIcon, LockClosedIcon } from 'react-native-heroicons/outline'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomButton from '@/components/CustomButton'

const Signin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const Submit = () => {
        email == '' ? setEmailError(true) : setEmailError(false)
        password == '' ? setPasswordError(true) : setPasswordError(false)
        // if (email == '') {
        //   setEmailError(true)
        // } else setEmailError(false)
        // if (password == '') {
        //   setPasswordError(true)
        // } else setPasswordError(false)
        getData();
    }

    const getData = async () => {
        const userEmail = await AsyncStorage.getItem('EMAIL');
        const userPassword = await AsyncStorage.getItem('PASSWORD')

        if (email === userEmail && password === userPassword) {
            router.push('/(tabs)/Home');
        } else {
            alert('login Fail');
        }
    }
    return (
        <View style={{ backgroundColor: '#000' }}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.logo}>
                <Image source={require('../images/launcher.png')} style={styles.image} />
            </View>
            <View style={styles.loginContainer}>
                <View style={styles.login}>
                    <Text style={styles.text}>Login</Text>
                </View>
                <View style={styles.input}>
                    <EnvelopeIcon size={26} color={'gray'} />
                    <TextInput
                        placeholder='Email'
                        value={email}
                        setValue={setEmail}
                    />
                </View>
                {
                    emailError === true && (
                        <Text style={{ color: 'red' }}>please enter email.</Text>
                    )
                }
                <View style={[styles.input, { marginTop: 20 }]}>
                    <EyeSlashIcon size={26} color={'gray'} />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        maxLength={10}
                        value={password}
                        setValue={setPassword}
                    />
                </View>
                {
                    passwordError === true && (
                        <Text style={{ color: 'red' }}>please enter password.</Text>
                    )
                }
                {/* <View style={styles.forgot}>
        <View style={{ flexDirection: 'row' }}>
          <Checkbox />
          <Text style={{ color: 'gray', marginVertical: 6, marginHorizontal: 4, fontSize: 16 }}>Remember me</Text>
        </View>
        <View>
          <Text style={{ color: 'gray', marginVertical: 6, marginHorizontal: 4, fontSize: 16 }}>Forgot password</Text>
        </View>
      </View> */}
                <View style={{ marginTop: 30 }}>
                    <CustomButton
                        title='Login'
                        BgColor='#000'
                        TextColor='#fff'
                        borderTopLeftRadius={10}
                        borderBottomLeftRadius={10}
                        borderBottomRightRadius={10}
                        onPress={() => Submit()}
                    />
                </View>
                {/* <View style={{ flexDirection: 'row' }}>
        <View style={{ borderWidth: 1, borderBottomColor: 'gray', width: '45%', marginBottom: 10 }}></View>
        <Text style={{ color: 'gray', fontSize: 18, marginHorizontal: 10, }}>or</Text>
        <View style={{ borderWidth: 1, borderBottomColor: 'gray', width: '45%', marginBottom: 10 }}></View>
      </View> */}
                {/* <View style={styles.signin}>
        <View style={styles.google}>
          <Icon  name = "googleplus" color = "white"/>
          <Text style={{ color: '#fff', fontSize: 20, margin: 20 }}>Google</Text>
        </View>
        <View style={styles.google}>
          <Icon name = "apple1" color = "white"/>
          <Text style={{ color: '#fff', fontSize: 20, margin: 20 }}>Apple</Text>
        </View>
      </View> */}
                <View style={{ flexDirection: 'row', marginTop: 100, alignSelf: 'center' }}>
                    <Text style={{ color: "#000", fontSize: 18, fontWeight: 'bold' }}>Don't have Account?</Text>
                    <Text style={{ color: "#000", fontSize: 18, fontWeight: 'bold', marginLeft: 5 }} onPress={() => router.push('/auth/Register')}>Sign Up</Text>
                </View>
            </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    logo: {
        borderRadius: 1,
        padding: 15,
        backgroundColor: '#fff',
        borderColor: '#fff',
        width: 100,
        alignItems: 'center',
        marginTop: 100,
        marginLeft: 150,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 40
    },
    login: {
        alignItems: 'center',
        marginTop: 40,
    },
    text: {
        fontSize: 30,
        color: '#000',
        fontWeight: '700'
    },
    input: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 10,
        padding: 15,
        marginTop: '20%',
    },
    forgot: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        marginVertical: 40,
        padding: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    signin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
    },
    google: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        width: '45%',
        borderRadius: 10,
    },
    loginContainer: {
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 80,
        padding: 20,
        marginTop: '20%',
        height: 800
    }
})