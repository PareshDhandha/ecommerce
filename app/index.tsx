import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Animated, { FadeInRight } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const index = () => {
  const router = useRouter();
  return (
    <View style={styles.containder}>
      <Animated.View entering={FadeInRight.delay(200).springify()} style={{ flex: 1 }}>
        <Image source={require('./images/d.png')} style={styles.image} />
        {/* <Animated.View entering={FadeInRight.delay(300).springify()} style={styles.trend}>
          <Text style={styles.collectText}>Collecting New Trend</Text>
        </Animated.View> */}
        <Animated.View entering={FadeInRight.delay(300).springify()} style={styles.trend}>
          <TouchableOpacity onPress={() => router.push("/(tabs)/Home")}>
            <Text style={styles.discoveryText}>Discovery</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  containder: {
    flex: 1,
    backgroundColor: '#000',
  },
  trend: {
    position: 'absolute',
    bottom: 0,
    // right: 30,
    backgroundColor: '#bebebe',
    padding: 19,
    borderRadius: 10,
    width: width * 1,
  },
  discovery: {
    textAlign: 'center',
    backgroundColor: 'pink',
    width: width * 1,
    height: height * 1,
    borderRadius: 30,
    // marginVertical:5,
  },
  collectText: {
    textAlign: 'center',
    fontSize: 50
  },
  discoveryText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'green'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})