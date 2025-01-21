import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Pressable, StatusBar } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Animated, { FadeInDown, FadeInRight, FadeInUp } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
// const { width, height } = Dimensions.get('window');

const index = () => {
  const router = useRouter();
  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');

    if (email !== null) {
      router.push('/(tabs)/Home');
      console.log('login....')
    } else {
      router.push('/auth/Signin');
    }
  }


  return (
    <View style={styles.containder}>
      <StatusBar barStyle={'dark-content'} />
      <Animated.View entering={FadeInDown.delay(200).springify()} style={{ flex: 1 }}>
        <LottieView
          autoPlay
          style={{
            width: 300,
            height: 600,
            alignSelf: 'center',
            // marginTop: 50
          }}
          source={require('../assets/anitw0.json')}
        />
        <Animated.View entering={FadeInDown.delay(500).springify()} style={styles.discovery}>
          <Text style={styles.collectText}>Embrace Your Inner Fashion Guru</Text>
          <Text style={[styles.collectText, { marginTop: 5 }]}>Laughter Guaranteed with Every Purchase</Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(700).springify()} style={styles.trend}>
          <Pressable onPress={getData}>
            <Text style={styles.discoveryText}>Discovery...  </Text>
          </Pressable>
        </Animated.View>
      </Animated.View>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  containder: {
    flex: 1,
    // backgroundColor: '#000',
  },
  trend: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    backgroundColor: '#571B7E',
    padding: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  discovery: {
    alignContent: 'center',
    alignItems: 'center'
    // marginVertical:5,
  },
  collectText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600'
  },
  discoveryText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})