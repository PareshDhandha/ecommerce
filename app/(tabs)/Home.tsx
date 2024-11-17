import { StyleSheet, TouchableOpacity, View, Text, StatusBar } from 'react-native'
import React from 'react'
import BoxWhite from '@/components/Header'
import ProductList from '@/components/ProductList';
import Category from '@/components/Category';
import Header from '@/components/Header';


const Home = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <View>
        <Header />
      </View>
      <View style={styles.containerBody}>
        <ProductList />
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  containerBody: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: '76%',
    marginTop: 3,
    paddingHorizontal: 10
  },

})