import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import ProfileModal from '../Helper/ProfileEdit';
import ProfileScreen from '../Helper/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../images/user.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Profile = () => {
  const [name, setName] = useState<string>();
  const [image, setImage] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const user = await AsyncStorage.getItem('NAME');
      const profile = await AsyncStorage.getItem('Image');
      console.log('user...', user)
      setName(user)
      setImage(profile);
    }
    fetchData();
  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image source={image ? { uri: image } : User} style={styles.dp} />
          <Text style={{ fontSize: hp(4), fontWeight: '500' }}>{name}</Text>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={styles.signin} onPress={() => router.push('/Helper/ProfileEdit')}>
              <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 2 }}>
        <ProfileScreen />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    height: hp(30),
    backgroundColor: '#fff',
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5)
  },
  box: {
    alignItems: 'center',
    marginTop: hp(5)
  },
  signinbutton: {
    justifyContent: 'center',
  },
  signin: {
    borderRadius: wp(5),
    padding: wp(2),
    backgroundColor: 'black'
  },
  dp: {
    width: 100,
    height: 100,
    borderRadius: 100,
    // resizeMode: 'contain',
  },
  text: {
    fontSize: hp(2),
    fontWeight: '600',
    marginHorizontal: wp(4),
    color: '#fff'
  },
  modal: {
    flex: 1,
    backgroundColor: 'red',

  }
})