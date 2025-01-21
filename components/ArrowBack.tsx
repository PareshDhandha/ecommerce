import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { FC, useState } from 'react'
import { ChevronLeftIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { router } from 'expo-router'
import { theme } from '@/constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';

interface BackIconProps {
  title: string;
  color: string;
  size: number;
  // show: string
}

const ArrowBack: FC<BackIconProps> = ({ title, color, size, }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.Iconbg}>
        <View>
          <ChevronLeftIcon color={color} size={size} onPress={() => router.back()} />
        </View>
        <Text style={styles.text}>{title}</Text>
        {/* <ShoppingBagIcon color={color} size={size} /> */}
      </View>
    </View>
  )
}

export default ArrowBack

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2.3),
    backgroundColor: '#fff',
    height: hp(10),
    borderBottomEndRadius: wp(5),
    borderBottomLeftRadius: wp(5),
  },
  text: {
    fontSize: hp(2.5),
    color: '#000',
    fontWeight: '600',
    paddingLeft: wp(4.5)
  },
  Iconbg: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: hp(4),
    paddingLeft: wp(5)
  }
})