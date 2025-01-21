import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeartIcon, MinusIcon, PlusIcon, TrashIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemToCart } from '../store/slice/CartSlice'
import { addToWishlist } from '../store/slice/WishListSlice'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get('window');

const Cart = () => {
  const [count, setCount] = React.useState(0);
  const [cartProduct, setCartProduct] = useState();
  const product = useSelector(state => state.cart)
  const dispatch = useDispatch();
  console.log('cartP...', product);


  const getToal = () => {
    let total = 0;
    let price = count;
    product.map((item: any) => {
      // total = total + parseFloat(item.price);
      total = total + item.price
      // price = price * total
    })
    return total
  }

  // useEffect(() => {
  //   const getData = async () => {
  //     const cartItem = await AsyncStorage.getItem('cart');
  //     console.log('getdAttttt', cartItem)
  //     setCartProduct(cartItem)
  //   }
  //   getData();
  // }, [])
  return (
    <View style={styles.container}>
      {
        product.length > 0 ?
          <FlatList
            data={product}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.addProduct} key={index}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.cartDetails}>
                      <Text style={{ fontSize: 18, fontWeight: '500' }} numberOfLines={2} ellipsizeMode='tail'>{item.title.slice(0, 27)} </Text>
                      <Text style={{ fontSize: 16, fontWeight: '300', marginTop: 5 }}> $ {item.price}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                          <TouchableOpacity onPress={() => setCount(count - 1)} style={{ borderColor: '#cecece', borderWidth: 0.7, padding: 5, borderRadius: 20 }}>
                            <MinusIcon size={16} color={'#000'} />
                          </TouchableOpacity>
                          <Text style={{ paddingHorizontal: 18, fontSize: 16 }}>{count < 0 ? 0 : count}</Text>
                          <TouchableOpacity onPress={() => setCount(count + 1)} style={{ borderColor: '#cecece', borderWidth: 0.7, padding: 5, borderRadius: 20 }}>
                            <PlusIcon size={16} color={'#000'} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <TrashIcon
                      size={24}
                      color={'red'}
                      style={{ position: 'absolute', right: 10, bottom: 10 }}
                      onPress={() => dispatch(removeItemToCart(item.id))}
                    />
                  </View>
                </View>
              )
            }}
          />
          : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#000', fontSize: 18 }}>No items Added in Cart</Text>
          </View>
      }
      {
        product.length > 0 ? (
          <View style={{ position: 'absolute', bottom: 5, width: '100%', paddingHorizontal: 10 }}>
            <CustomButton
              title='Checkout'
              BgColor='#000'
              TextColor='#fff'
              borderTopLeftRadius={10}
              borderBottomLeftRadius={10}
              borderBottomRightRadius={10}
              onPress={() => router.push({
                pathname: '/Screen/Checkout',
              })}
            />
          </View>
        ) : null
      }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 16
    // backgroundColor: '#000'
  },
  addProduct: {
    // backgroundColor: '#fff',
    // width: '100%',
    // height: 140,
    // marginTop: 15,
    // borderRadius: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 10,
    // marginLeft: 10,
    resizeMode: 'contain',
    backgroundColor: '#fff'
  },
  cartDetails: {
    marginTop: 20,
    alignSelf: 'center',
    marginLeft: 10
  },
  btn: {
    backgroundColor: '#bebebe',
    padding: 10,
    borderRadius: 10,
    width: 100,
    position: 'absolute',
    right: 0
  }
})