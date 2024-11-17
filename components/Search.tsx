import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-heroicons/outline'
import { theme } from '@/constants/Colors'

const Search = () => {
  return (
    <View style={styles.search}>
      <Icon.MagnifyingGlassCircleIcon size={28} color={"#000"} style={{ marginTop: 4 }} />
      <TextInput
        placeholder='Search'
        placeholderTextColor={"gray"}
        style={{ marginLeft: 5, padding: 3 }}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    padding: 10,
    width: '90%',
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 20,
    borderColor: theme.colors.inverseOnSurface
  }
})