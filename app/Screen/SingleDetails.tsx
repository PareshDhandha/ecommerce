import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ArrowBack from '@/components/ArrowBack'
import { theme } from '@/constants/Colors'
import { useLocalSearchParams } from 'expo-router'
import { addItemToCart } from '../store/slice/CartSlice'
import CustomButton from '@/components/CustomButton'
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAppDispatch } from '../store/slice/Hook'


const SingleDetails = () => {
    const [count, setCount] = useState(0);
    const item = useLocalSearchParams();
    console.log('itrmmmm', item.rating)
    const dispatch = useAppDispatch();

    const addProduct = (item: any) => {
        dispatch(addItemToCart(item))
        // await AsyncStorage.setItem('cart', item)
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.onBackground }}>
            <ArrowBack size={wp(7)} color={theme.colors.onBackground} title='Product' />
            <View style={[styles.imageContainer, { height: hp(34) }]}>
                <Animatable.View animation={'fadeInUp'} duration={1000}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                </Animatable.View>
            </View>
            <View style={[styles.imageContainer, { marginVertical: hp(0.5), height: hp(49), padding: wp(2) }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Animatable.Text animation={'slideInLeft'} duration={1000} style={{ fontSize: hp(2.8), fontWeight: '600' }} numberOfLines={2}>{item.title.slice(0, 24)}</Animatable.Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* <Animatable.Text animation={'slideInRight'} duration={1000} style={{ fontSize: hp(2.8), fontWeight: '600' }}> <Text>$</Text> {item.rating.rate}</Animatable.Text> */}
                        <Animatable.Text animation={'slideInLeft'} duration={1000} style={{ fontSize: hp(2.8), fontWeight: '600', marginTop: hp(1) }}> <Text>$</Text> {item.price}</Animatable.Text>
                        <View style={{ flexDirection: 'row', marginRight: wp(3), backgroundColor: '#000', padding: wp(2), paddingHorizontal: wp(2), borderRadius: wp(5) }}>
                            <TouchableOpacity onPress={() => setCount(count - 1)} style={{ marginTop: hp(0.3) }}>
                                <MinusIcon size={hp(2.6)} color={'#fff'} />
                            </TouchableOpacity>
                            <Text style={{ paddingHorizontal: wp(2), color: '#fff', fontSize: hp(2.3) }}>{count < 0 ? 0 : count}</Text>
                            <TouchableOpacity style={{ marginTop: hp(0.3) }} onPress={() => setCount(count + 1)}>
                                <PlusIcon size={hp(2.6)} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Animatable.Text animation={'fadeInUp'} duration={1000} style={{ marginTop: hp(3), fontWeight: '400', fontSize: hp(2.2) }}>{item.description}</Animatable.Text>
                </ScrollView>
            </View>
            <Animatable.View animation={'fadeInUp'} duration={1000} >
                <CustomButton
                    BgColor='#ffff'
                    title='Add to Cart'
                    TextColor='#000'
                    borderRadius={wp(4)}
                    onPress={() => addProduct(item)}
                />
            </Animatable.View>
        </View >
    )
}

export default SingleDetails

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#fff',
        borderRadius: wp(5.4),
        marginTop: wp(0.3),
    },
    image: {
        width: wp(47),
        height: hp(33),
        resizeMode: 'contain',
        // marginHorizontal: 20,
        // marginTop: 5,
        alignSelf: 'center'

    },
    btn: {
        backgroundColor: '#fff',
        padding: wp(5),
        borderRadius: 25,
    }
})