import { StyleSheet, TouchableOpacity, View, Text, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import ProductList from '@/components/ProductList';
import Header from '@/components/Header';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const Home = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
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
    borderRadius: widthPercentageToDP(6),
    height: height * 0.74,
    marginTop: heightPercentageToDP(0.1),
    paddingHorizontal: widthPercentageToDP(2)
  },

})