import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Modal } from 'react-native-paper';
import { XMarkIcon, CameraIcon, PhotoIcon } from 'react-native-heroicons/outline';
import * as ImagePicker from 'expo-image-picker';
import { addCameraPicture } from '../store/slice/ProfileSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../store/slice/Hook';

interface ProfileProps {
    isVisible: boolean,
    setIsVisible: boolean
}

const ProfileImage: FC<ProfileProps> = ({ isVisible, setIsVisible }) => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const [image, setImage] = React.useState<string | null>(null);
    const dispatch = useAppDispatch();

    const showModal = () => setIsVisible(true);
    const hideModal = () => setIsVisible(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quantity: 1,
        });
        console.log('imageopen....', result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }
    const takePicture = async () => {
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraPermission.granted === false) {
            alert("permission denied");
            return;
        }
        const result = await ImagePicker.launchCameraAsync();

        console.log("result..", result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log("uri", result.assets[0].uri);
            dispatch(addCameraPicture(result.assets[0].uri))
        }
        await AsyncStorage.setItem('Image', image);
    };

    return (
        <View>
            <Modal visible={isVisible}>
                <View style={styles.modalView}>
                    <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center' }}>Profile Photo</Text>
                    <XMarkIcon
                        size={26}
                        color={'#000'}
                        style={{ position: 'absolute', right: 20, top: 20 }}
                        onPress={hideModal}
                    />
                    <View style={{ flexDirection: 'row', padding: 20, marginTop: 10 }}>
                        <View>
                            <CameraIcon size={30} color={'green'} style={{ padding: 20, borderRadius: 50, marginLeft: 5 }} onPress={takePicture} />
                            <Text style={{ marginTop: 5, }}>Camera</Text>
                        </View>
                        <View style={{ paddingLeft: 30 }}>
                            <PhotoIcon size={30} color={'green'} style={{ padding: 20, borderRadius: 50, marginLeft: 1 }} onPress={pickImage} />
                            <Text style={{ marginTop: 5, }}>Gallery</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ProfileImage

const styles = StyleSheet.create({
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        width: '100%',
        height: 200,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 450,
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