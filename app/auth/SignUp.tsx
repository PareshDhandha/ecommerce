import { StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import { EnvelopeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from 'react-native-heroicons/outline'
import { useRouter } from 'expo-router'
import AsynceStorage from '@react-native-async-storage/async-storage'
import TextInput from '@/components/TextInput'
import CustomButton from '@/components/CustomButton'


const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();
  const [nameError, setNameError] = useState(false);
  const [mobile, setMobile] = useState();
  const [mobileError, setMobileError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [conPasswordError, setConPasswordError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const submit = () => {
    setButtonDisabled(true);

    if (name == '') {
      setNameError(true);
      setButtonDisabled(false)
    }
    else {
      setNameError(false);
    }
    if (email == '') {
      setEmailError(true);
      setButtonDisabled(false)
    }
    else {
      setEmailError(false);
    }
    if (password == '') {
      setPasswordError(true);
      setButtonDisabled(false)
    }
    else {
      setPasswordError(false);
    }
    if (conPassword == '') {
      setConPasswordError(true);
      setButtonDisabled(false)
    }
    else {
      setConPasswordError(false);
    }
    if (mobile == '') {
      setMobileError(true);
      setButtonDisabled(false)
    }
    else {
      setMobileError(false);
      saveData();
    }
  }
  const saveData = async () => {
    await AsynceStorage.setItem('NAME', name);
    await AsynceStorage.setItem('EMAIL', email);
    await AsynceStorage.setItem('PASSWORD', password);
    await AsynceStorage.setItem('MOBILE', mobile);
    console.log('useraccount....', name, email, password, mobile)
  }

  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
      <View style={styles.login}>
        <Text style={styles.text}>SignUp</Text>
      </View>
      <View style={styles.input}>
        <UserIcon size={26} color={'gray'} />
        <TextInput
          placeholder='Name'
          value={name}
          setValue={setName}
        />
      </View>
      {nameError === true && (
        <Text style={{ color: 'red' }}>please enter name.</Text>
      )}
      <View style={styles.input}>
        <EnvelopeIcon size={26} color={'gray'} />
        <TextInput
          placeholder='Email'
          value={email}
          setValue={setEmail}
        />
      </View>
      {emailError === true && (
        <Text style={{ color: 'red' }}>please enter email.</Text>
      )}
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
      {passwordError === true && (
        <Text style={{ color: 'red' }}>please enter password.</Text>
      )}
      <View style={styles.input}>
        <EyeSlashIcon size={26} color={'gray'} />
        <TextInput
          placeholder='Confirm Password'
          secureTextEntry={true}
          maxLength={10}
          value={conPassword}
          setValue={setConPassword}
        />
      </View>
      {conPassword !== password && (
        <Text style={{ color: 'red' }}>password does't match.</Text>
      )}
      <View style={styles.input}>
        <LockClosedIcon size={26} color={'gray'} />                                                                                                          >
        <TextInput
          placeholder='Mobile No.'
          maxLength={10}
          value={mobile}
          setValue={setMobile}
        />
      </View>
      {
        mobileError === true && (
          <Text style={{ color: 'red' }}>please enter name.</Text>
        )
      }
      <View>
        <CustomButton
          title='Create Account'
          onPress={() => submit()}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, paddingLeft: 50 }}>
        <Text style={{ color: "#fff" }}>Alaredy have Account?</Text>
        <Text style={{ color: "blue", marginLeft: 10 }} onPress={() => router.push('/auth/Login')}>Login.</Text>
      </View>
    </View>
  )
}

export default SignUp

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
    padding: 10,
    paddingLeft: 10,
    marginBottom: 20
  },
  button: {
    marginVertical: 40,
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
})