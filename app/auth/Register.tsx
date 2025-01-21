import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DevicePhoneMobileIcon, EnvelopeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from 'react-native-heroicons/outline'
import { useRouter } from 'expo-router'
import AsynceStorage from '@react-native-async-storage/async-storage'
import TextInput from '@/components/TextInput'
import CustomButton from '@/components/CustomButton'

const Register = () => {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<any>('');
    const [conPassword, setConPassword] = useState<any>('');
    const [nameError, setNameError] = useState(false);
    const [mobile, setMobile] = useState<any>();
    const [mobileError, setMobileError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [conPasswordError, setConPasswordError] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

    const submit = () => {
        setButtonDisabled(true);

        if (name == '') {
            setNameError(true);
            setButtonDisabled(false)
        }
        else {
            setNameError(false);
        }
        if (email == '') {
            setEmailError(true);
            setButtonDisabled(false)
        }
        else {
            setEmailError(false);
        }
        if (password == '') {
            setPasswordError(true);
            setButtonDisabled(false)
        }
        else {
            setPasswordError(false);
        }
        if (conPassword == '') {
            setConPasswordError(true);
            setButtonDisabled(false)
        }
        else {
            setConPasswordError(false);
        }
        if (mobile == '') {
            setMobileError(true);
            setButtonDisabled(false)
        }
        else {
            setMobileError(false);
            saveData();
        }
    }
    const saveData = async () => {
        await AsynceStorage.setItem('NAME', name);
        await AsynceStorage.setItem('EMAIL', email);
        await AsynceStorage.setItem('PASSWORD', password);
        await AsynceStorage.setItem('MOBILE', mobile);
        console.log('useraccount....', name, email, password, mobile)
        router.push('/auth/Signin');
    }

    return (
        <View style={{ backgroundColor: '#000' }}>
            <View style={styles.login}>
                <Text style={styles.text}>Sign Up</Text>
            </View>
            <View style={styles.signupWrapper}>
                <View style={styles.input}>
                    <UserIcon size={26} color={'gray'} />
                    <TextInput
                        placeholder='Name'
                        value={name}
                        setValue={setName}
                    />
                </View>
                {nameError === true && (
                    <Text style={{ color: 'red' }}>please enter name.</Text>
                )}
                <View style={styles.input}>
                    <EnvelopeIcon size={26} color={'gray'} />
                    <TextInput
                        placeholder='Email'
                        value={email}
                        setValue={setEmail}
                    />
                </View>
                {emailError === true && (
                    <Text style={{ color: 'red' }}>please enter email.</Text>
                )}
                <View style={styles.input}>
                    <EyeSlashIcon size={26} color={'gray'} />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        maxLength={10}
                        value={password}
                        setValue={setPassword}
                    />
                </View>
                {passwordError === true && (
                    <Text style={{ color: 'red' }}>please enter password.</Text>
                )}
                <View style={styles.input}>
                    <LockClosedIcon size={26} color={'gray'} />
                    <TextInput
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        maxLength={10}
                        value={conPassword}
                        setValue={setConPassword}
                    />
                </View>
                {conPassword !== password && (
                    <Text style={{ color: 'red' }}>password does't match.</Text>
                )}
                <View style={styles.input}>
                    <DevicePhoneMobileIcon size={26} color={'gray'} />
                    <TextInput
                        placeholder='Mobile No.'
                        secureTextEntry={true}
                        maxLength={10}
                        value={mobile}
                        setValue={setMobile}
                    />
                </View>
                {
                    mobileError === true && (
                        <Text style={{ color: 'red' }}>please enter name.</Text>
                    )
                }
                <View style={styles.button}>
                    <CustomButton
                        title='Create Account'
                        BgColor='#000'
                        TextColor='#fff'
                        borderTopLeftRadius={10}
                        borderBottomLeftRadius={10}
                        borderBottomRightRadius={10}
                        onPress={() => submit()}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                    <Text style={{ color: "#000", fontSize: 18, fontWeight: 'bold' }}>Alaredy have Account?</Text>
                    <Text style={{ color: "#000", marginLeft: 5, fontSize: 18, fontWeight: 'bold' }} onPress={() => router.push('/auth/Signin')}>Sign In</Text>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    login: {
        alignItems: 'center',
        marginVertical: 50,
    },
    text: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '300',
        letterSpacing: 6
    },
    input: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 12,
        paddingLeft: 10,
        marginTop: 20,
        // marginBottom: 20,
    },
    button: {
        marginTop: 50,
    },
    signupWrapper: {
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 80,
        padding: 20,
        paddingTop: '10%',
        height: 800
    }
})