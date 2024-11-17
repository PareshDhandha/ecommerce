import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../store/slice/CartSlice'
import { removeFromWishlist } from '../store/slice/WishListSlice'


const Save = () => {
  const saveProduct = useSelector(state => state.wish)
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle={'light-content'} /> */}
      {
        saveProduct.map((item: any, id: any) => {
          return (
            <View style={styles.addProduct} key={id}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <HeartIcon size={24} color={'red'} style={{ position: 'absolute', right: 20, top: 10 }} onPress={() => dispatch(removeFromWishlist(item.id))} />
                <View style={styles.cartDetails}>
                  <Text style={{ fontSize: 18, fontWeight: '500' }} numberOfLines={2}>{item.title.slice(0, 20)}</Text>
                  <View style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: '300' }}>$ {item.price}</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => dispatch(addItemToCart(item))}>
                      <Text style={{ color: '#fff', fontWeight: '500' }}>AddToCart</Text>
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

export default Save

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
    borderRadius: 10
  },
  image: {
    width: 110,
    height: 100,
    marginTop: 20,
    marginLeft: 10
  },
  cartDetails: {
    marginTop: 30,
    marginLeft: 10,
    alignSelf: 'center'
  },
  btn: {
    backgroundColor: '#bebebe',
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginTop: 5
  }
})