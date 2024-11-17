import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { FC, useState } from 'react'
import { ChevronLeftIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { router } from 'expo-router'
import { theme } from '@/constants/Colors';

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
        <View style={{ backgroundColor: theme.colors.inverseOnSurface, borderRadius: 50 }}>
          <ChevronLeftIcon color={color} size={size} onPress={() => router.back()} />
        </View>
        <Text style={styles.text}>{title}</Text>
        <ShoppingBagIcon color={color} size={size} />
      </View>
    </View>
  )
}

export default ArrowBack

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
    height: '10%',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600'
  },
  Iconbg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20
  }
})