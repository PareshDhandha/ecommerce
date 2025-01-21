import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ArrowBack from '@/components/ArrowBack'
import TextInput from '@/components/TextInput'
import CustomButton from '@/components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addAddress } from '../store/slice/AddressSlice'
import { useRouter } from 'expo-router'
import { useAppDispatch } from '../store/slice/Hook'

const AddAddress = () => {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [mobile, setMobile] = useState<number>();
    const [pincode, setPincode] = useState<number>();
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const dispatch = useAppDispatch();
    // const value = { name: name, mobile: mobile, pincode: pincode, state: state, city: city }
    // const submit = async () => {
    //     const saveAddress = await AsyncStorage.setItem('Address', JSON.stringify(value))
    //     console.log('saveAdress..', saveAddress);
    // }
    return (
        <View style={{ flex: 1 }}>
            <ArrowBack title='Add Delivery Address' size={26} color='#000' />
            <View style={{ padding: 20 }}>
                <View style={styles.input}>
                    <TextInput
                        placeholder='Full Name'
                        value={name}
                        setValue={setName}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput placeholder=
                        'Phone Number'
                        value={mobile}
                        setValue={setMobile}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder='Pincode'
                        value={pincode}
                        setValue={setPincode}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder='State'
                        value={state}
                        setValue={setState}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder='City'
                        value={city}
                        setValue={setCity}
                    />
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <CustomButton
                    title='Save Address'
                    BgColor='red'
                    TextColor='#fff'
                    borderTopLeftRadius={10}
                    borderBottomLeftRadius={10}
                    borderBottomRightRadius={10}
                    onPress={() => dispatch(addAddress({
                        name: name,
                        mobile: mobile,
                        pincode: pincode,
                        state: state,
                        city: city
                    }),
                        router.back()
                    )
                    }
                />
            </View>
        </View>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 10,
        padding: 15,
        marginTop: 20,
    }
})