import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeartIcon, TrashIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemToCart } from '../store/slice/CartSlice'


const Cart = () => {
  const product = useSelector(state => state.cart)
  const dispatch = useDispatch();
  console.log('cartP...', product);
  const image = 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'
  return (
    <View style={styles.container}>
      {
        product.map((item: any, id: any) => {
          return (
            <View style={styles.addProduct} key={id}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <HeartIcon size={24} color={'#000'} style={{ position: 'absolute', right: 20, top: 10 }} />
                <View style={styles.cartDetails}>
                  <Text style={{ fontSize: 18, fontWeight: '500' }} numberOfLines={2}>{item.title.slice(0, 20)} </Text>
                  <View style={{ marginTop: 5, }}>
                    <Text style={{ fontSize: 16, fontWeight: '300' }}> $ {item.price}</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => dispatch(removeItemToCart(item.id))}>
                      <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '600' }}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#000'
  },
  addProduct: {
    backgroundColor: '#fff',
    width: '100%',
    height: 140,
    marginTop: 15,
    borderRadius: 15
  },
  image: {
    width: 110,
    height: 100,
    marginTop: 20,
    marginLeft: 10
  },
  cartDetails: {
    marginTop: 30,
    alignSelf: 'center',
    marginLeft: 10
  },
  btn: {
    backgroundColor: '#bebebe',
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginTop: 5
  }
})