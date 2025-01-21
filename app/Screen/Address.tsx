import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowBack from '@/components/ArrowBack'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { removeAddress, selectAddress } from '../store/slice/AddressSlice'
import { useAppDispatch, useAppSelector } from '../store/slice/Hook'

const Address = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const address = useAppSelector(selectAddress)
    console.log('address...', address)
    return (
        <View style={{ flex: 1 }}>
            <ArrowBack title='My Address' size={24} color='#000' />
            <View>
                <CustomButton
                    title='Add a new Address'
                    BgColor='#0A4BC5'
                    TextColor='#fff'
                    onPress={() => router.push('/Screen/AddAddress')}
                />
            </View>
            {
                address.map((item: any, index: number) => (
                    <View key={index} style={{ padding: 20, borderWidth: 0.3, marginTop: 40, borderColor: '#bebebe' }}>
                        <Text style={{ marginTop: 10, fontSize: 18 }}>Name :  {item.name}</Text>
                        <Text style={{ marginTop: 5, fontSize: 18 }}>Mobile :  {item.mobile}</Text>
                        <Text style={{ marginTop: 5, fontSize: 18 }}>City :  {item.city}</Text>
                        <Text style={{ marginTop: 5, fontSize: 18 }}>Pincode :  {item.pincode}</Text>
                        <Text style={{ marginTop: 5, fontSize: 18 }}>State :  {item.state}</Text>
                        <XCircleIcon size={30} color={'#000'} style={{ position: 'absolute', right: 10, top: 20 }} onPress={() => dispatch(removeAddress(item.id))} />
                    </View>

                ))
            }
        </View>
    )
}

export default Address

const styles = StyleSheet.create({})