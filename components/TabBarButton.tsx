import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '@/assets/icons';

const TabBarButton = ({ isFocused, onPress, onLongPress, label, routeName }:
  {
    isFocused: boolean,
    onPress: Function,
    onLongPress: Function,
    label: string,
    routeName: string
  }) => {
  return (
    <Pressable style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {/* {
        icons[routeName]({
          color: isFocused ? '#673ad7' : '#222',
        })
      } */}
      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
        {label}
      </Text>
    </Pressable>
  )
}

export default TabBarButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  }
})