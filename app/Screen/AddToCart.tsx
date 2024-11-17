import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeartIcon, TrashIcon } from 'react-native-heroicons/outline'

const AddToCart = () => {
    const image = 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#000'} barStyle={"light-content"} />
            <View style={styles.addProduct}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <HeartIcon size={24} color={'#000'} style={{ position: 'absolute', right: 20, top: 10 }} />
                    <View style={styles.cartDetails}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }} numberOfLines={2}>Essence Mascara </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>$ 29</Text>
                            <TrashIcon size={24} color={'red'} />
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default AddToCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#000'
    },
    addProduct: {
        backgroundColor: '#fff',
        width: '100%',
        height: 120,
        marginTop: 10,
        borderRadius: 25
    },
    image: {
        width: 110,
        height: 100,
        marginTop: 10,
        marginLeft: 10
    },
    cartDetails: {
        marginTop: 20,

    }
})