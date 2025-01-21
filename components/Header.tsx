import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-heroicons/outline';
import Search from './Search';
import { theme } from '@/constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Header = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.icon}>
          <Icon.Bars3BottomLeftIcon size={hp(2.5)} color={"#000"} />
        </View>
        <Text style={{ color: '#000', fontSize: hp(3), fontWeight: '500' }}>Lumiere</Text>
        <View style={styles.icon}>
          <Icon.BellAlertIcon size={hp(2.5)} color={"#000"} style={styles.icon} />
        </View>
      </View>
      <Search />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
    backgroundColor: '#fff',
    borderBottomLeftRadius: wp(6),
    borderBottomRightRadius: wp(6),
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(3),
    marginBottom: hp(1)

  },
  icon: {
    borderRadius: wp(10),
    backgroundColor: theme.colors.inverseOnSurface,
    padding: wp(2.2),
  }
})