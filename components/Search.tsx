import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-heroicons/outline'
import { theme } from '@/constants/Colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const Search = () => {
  return (
    <View style={styles.search}>
      <Icon.MagnifyingGlassCircleIcon size={heightPercentageToDP(3.4)} color={"#000"} style={{ marginTop: heightPercentageToDP(0.5) }} />
      <TextInput
        placeholder='Search'
        placeholderTextColor={"gray"}
        style={{ marginLeft: widthPercentageToDP(1), padding: widthPercentageToDP(1) }}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    padding: widthPercentageToDP(2),
    width: '90%',
    marginHorizontal: widthPercentageToDP(4),
    borderWidth: 1,
    borderRadius: widthPercentageToDP(6),
    marginVertical: heightPercentageToDP(2.7),
    borderColor: theme.colors.inverseOnSurface
  }
})