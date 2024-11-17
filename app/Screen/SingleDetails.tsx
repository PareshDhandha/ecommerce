import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowBack from '@/components/ArrowBack'
import { theme } from '@/constants/Colors'
import { useLocalSearchParams } from 'expo-router'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../store/slice/CartSlice'
import CustomButton from '@/components/CustomButton'

const SingleDetails = () => {
    const item = useLocalSearchParams();
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.onBackground }}>
            <ArrowBack size={26} color={theme.colors.onBackground} title='Product' />
            <View style={[styles.imageContainer, { height: '33%' }]}>
                <View>
                    <Image style={styles.image} source={{ uri: item.image }} />
                </View>
            </View>
            <View style={[styles.imageContainer, { marginVertical: 5, height: '46%', padding: 10 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }} numberOfLines={2}>{item.title.slice(0, 24)}</Text>
                        <Text style={{ fontSize: 20, fontWeight: '600', paddingRight: 5 }}> <Text>$</Text> {item.price}</Text>
                    </View>
                    <Text style={{ marginTop: 20, fontWeight: '400', fontSize: 16 }}>{item.description}</Text>
                </ScrollView>
            </View>
            <View>
                <CustomButton title='Add to Cart' onPress={() => dispatch(addItemToCart(item))} />
            </View>
        </View >
    )
}

export default SingleDetails

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#fff',
        borderRadius: 25,
        marginTop: 5,
    },
    image: {
        width: '90%',
        height: '97%',
        marginHorizontal: 20,
        marginTop: 5,

    },
    btn: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 25,
    }
})