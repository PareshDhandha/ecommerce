import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import ProfileModal from '../Helper/ProfileModal';
import ProfileScreen from '../Helper/ProfileScreen';


const Profile = () => {
  const [isVisble, setIsVisible] = useState(false);
  const router = useRouter();


  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.box}>
          <ProfileModal />
          <View style={styles.signinbutton}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity style={styles.signin} onPress={() => router.push('/auth/Login')}>
                <Text style={styles.text}>SignIn</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signin} onPress={() => router.push('/auth/SignUp')}>
                <Text style={styles.text}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ProfileScreen />
      {/* <View style={styles.modal}>
        <Modal visible={isVisble} contentContainerStyle={{ backgroundColor: '#fff' }}>
          <Text>Modal</Text>
        </Modal>
      </View> */}
      {/* <View>
        <BottomSheet index={1} snapPoints={["25%", "50%", "70%"]}>
          <Text>Hello</Text>
        </BottomSheet>
      </View> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    height: '23%',
    marginVertical: 25,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  box: {
    flexDirection: 'row',
  },
  image: {
    padding: 10
  },
  signinbutton: {
    justifyContent: 'center',
  },
  signin: {
    borderRadius: 8,
    padding: 4,
    marginRight: 10,
    borderColor: 'blue',
    backgroundColor: 'black'
  },
  dp: {
    width: 130,
    height: 140,
    borderRadius: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
    color: '#fff'
  },
  modal: {
    flex: 1,
    backgroundColor: 'red',

  }
})