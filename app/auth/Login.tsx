import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import { ChevronLeftIcon, EnvelopeIcon, EyeSlashIcon, LockClosedIcon } from 'react-native-heroicons/outline'
import { useRouter } from 'expo-router'
import { Checkbox } from 'react-native-paper'
import CustomButton from '../../components/CustomButton'
// import {Icon} from '@expo/vector-icons/AntDesign'

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);


  const Submit = () => {
    email == '' ? setEmailError(true) : setEmailError(false)
    password == '' ? setPasswordError(true) : setPasswordError(false)
    Alert.alert('clicked...')
    // if (email == '') {
    //   setEmailError(true)
    // } else setEmailError(false)
    // if (password == '') {
    //   setPasswordError(true)
    // } else setPasswordError(false)
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <ChevronLeftIcon color={"#fff"} style={{ marginVertical: 30 }} />
      </TouchableOpacity>
      <View style={styles.login}>
        <Text style={styles.text}>SignIn</Text>
      </View>
      <View style={styles.input}>
        <EnvelopeIcon size={26} color={'gray'} />
        <TextInput
          placeholder='Email'
          outlineStyle={{ borderRadius: 20, borderColor: "gray" }}
          value={email}
          setValue={setEmail}
        />
      </View>
      {
        emailError === true && (
          <Text style={{ color: 'red' }}>please enter email.</Text>
        )
      }
      <View style={styles.input}>
        <EyeSlashIcon size={26} color={'gray'} />
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          maxLength={10}
          value={password}
          setValue={setPassword}
        />
      </View>
      {
        passwordError === true && (
          <Text style={{ color: 'red' }}>please enter password.</Text>
        )
      }
      <View style={styles.forgot}>
        <View style={{ flexDirection: 'row' }}>
          <Checkbox />
          <Text style={{ color: 'gray', marginVertical: 6, marginHorizontal: 4, fontSize: 16 }}>Remember me</Text>
        </View>
        <View>
          <Text style={{ color: 'gray', marginVertical: 6, marginHorizontal: 4, fontSize: 16 }}>Forgot password</Text>
        </View>
      </View>
      <View>
        <CustomButton
          title='Login'
          onPress={() => Submit()}
        />
      </View>
      {/* <View style={{ flexDirection: 'row' }}>
        <View style={{ borderWidth: 1, borderBottomColor: 'gray', width: '45%', marginBottom: 10 }}></View>
        <Text style={{ color: 'gray', fontSize: 18, marginHorizontal: 10, }}>or</Text>
        <View style={{ borderWidth: 1, borderBottomColor: 'gray', width: '45%', marginBottom: 10 }}></View>
      </View> */}
      {/* <View style={styles.signin}>
        <View style={styles.google}>
          <Icon  name = "googleplus" color = "white"/>
          <Text style={{ color: '#fff', fontSize: 20, margin: 20 }}>Google</Text>
        </View>
        <View style={styles.google}>
          <Icon name = "apple1" color = "white"/>
          <Text style={{ color: '#fff', fontSize: 20, margin: 20 }}>Apple</Text>
        </View>
      </View> */}
      <View style={{ flexDirection: 'row', marginTop: 20, paddingLeft: 50 }}>
        <Text style={{ color: "#fff" }}>Don't have Account?</Text>
        <Text style={{ color: "blue", marginLeft: 10 }} onPress={() => router.push('/auth/SignUp')}>Create Account.</Text>
      </View>
    </View >
  )
}

export default Login

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    marginVertical: 50,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700'
  },
  input: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    padding: 12,
  },
  forgot: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginVertical: 40,
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  google: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    width: '45%',
    borderRadius: 10,
  }
})