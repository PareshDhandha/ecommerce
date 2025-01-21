import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import TextInput from '@/components/TextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraIcon, ChevronLeftIcon, ClockIcon, PhoneIcon, PhotoIcon, XMarkIcon } from 'react-native-heroicons/outline';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/Colors';
import { Modal } from 'react-native-paper';
import ProfileImage from './ProfileImage';

import User from '../images/user.png';
import { useAppSelector } from '../store/slice/Hook';


const ProfileEdit = () => {
    const router = useRouter()
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [image, setImage] = useState();
    const [visible, setVisible] = React.useState<boolean>(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const containerStyle = { backgroundColor: '#fff', padding: 60 };
    const picture = useAppSelector(state => state.profile)
    console.log('picty....', picture.map(item => item))
    useEffect(() => {
        const fetchData = async () => {
            const userName = await AsyncStorage.getItem('NAME')
            const userEmail = await AsyncStorage.getItem('EMAIL')
            const userPassword = await AsyncStorage.getItem('PASSWORD')
            const userMobile = await AsyncStorage.getItem('MOBILE')
            const profileImage = await AsyncStorage.getItem('Image')
            console.log('profile....', profileImage);
            setImage(profileImage)
            setName(userName)
            setEmail(userEmail)
            setPassword(userPassword)
            setMobile(userMobile)
        }
        fetchData();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.imageHeader}>
                <View style={{ position: 'absolute', left: 20, padding: 10, backgroundColor: theme.colors.surfaceVariant, borderRadius: 60, marginTop: 40 }}>
                    <ChevronLeftIcon color={'#000'} size={26} onPress={() => router.back()} />
                </View>
                <View style={styles.image}>
                    <TouchableOpacity onPress={showModal} >
                        <Image source={image ? { uri: image } : User} style={styles.dp} />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 20 }}>
                    <View style={styles.input}>
                        <TextInput placeholder='Name' value={name} />
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder='Email' value={email} />
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder='Password' value={password} />
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder='Mobile No.' value={mobile} />
                    </View>
                </View>
                <ProfileImage isVisible={visible} setIsVisible={setVisible} />
            </View>
        </View>
    )
}

export default ProfileEdit

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
    },
    imageHeader: {
        backgroundColor: '#fff',
        height: '100%',
        paddingTop: 60,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    dp: {
        width: 100,
        height: 100,
        borderRadius: 100,
        // resizeMode: 'contain',
    },
    container: {
        // flex: 1,
        backgroundColor: '#000'
    },
    profileContainer: {
        backgroundColor: '#fff',
        height: '74%',
        marginTop: 5,
        borderRadius: 25
    },
    input: {
        padding: 12,
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 10,
    },
    modalContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        width: '100%',
        height: 200,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 620,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})