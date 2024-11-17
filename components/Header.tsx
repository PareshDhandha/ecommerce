import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-heroicons/outline';
import Search from './Search';
import { theme } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';


const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.menu}>
        <View style={styles.icon}>
          <Icon.Bars3BottomLeftIcon size={20} color={"#000"} />
        </View>
        <Text style={{ color: '#000', fontSize: 24, fontWeight: '500' }}>Lumiere</Text>
        <View style={styles.icon}>
          <Icon.BellAlertIcon size={20} color={"#000"} style={styles.icon} />
        </View>
      </View>
      <Search />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10

  },
  icon: {
    borderRadius: 50,
    backgroundColor: theme.colors.inverseOnSurface,
    padding: 8,
  }
})