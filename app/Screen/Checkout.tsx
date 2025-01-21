import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import index from '..';
import { router } from 'expo-router';
import { useAppSelector } from '../store/slice/Hook';
import { selectCart } from '../store/slice/CartSlice';
import { selectAddress } from '../store/slice/AddressSlice';

const Checkout = () => {
    const cart = useAppSelector(selectCart);
    const address = useAppSelector(selectAddress)
    console.log('cartttttt', address)
    const getTotal = () => {
        let total = 0;
        cart.map(item => {
            const price = parseFloat(item.price)
            total = total + price;
            // console.log('total....', parseFloat(item.price))
        })
        return total
    }
    return (
        <View style={{ flex: 1, marginTop: 40 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <FlatList
                        data={cart}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ padding: 10 }}>
                                    <View style={{ backgroundColor: '#fff', flexDirection: 'row', padding: 10, borderRadius: 10 }}>
                                        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                                        <View style={{ margin: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.title.slice(0, 20)}</Text>
                                            <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.price}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }} />
                </View>
                <View style={styles.checkout}>
                    <Text style={{ marginTop: 10 }}>Total :</Text>
                    <Text>$ {getTotal()}</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Delivery Location</Text>
                    {
                        <FlatList
                            data={address}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ borderWidth: 0.2, borderColor: '#8e8e8e' }}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.mobile}</Text>
                                        <Text>{item.city}</Text>
                                        <Text>{item.pincode}</Text>
                                        <Text>{item.state}</Text>
                                    </View>
                                )
                            }}
                        />
                    }
                </View>
                <View style={{ padding: 20, backgroundColor: '#8e8e8e', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => router.push('/Screen/Order')}>
                        <Text style={{ color: '#fff' }}>Order</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    checkout: {
        width: '100%',
        borderTopWidth: 0.5,
        borderColor: '#8e8e8e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    }
})