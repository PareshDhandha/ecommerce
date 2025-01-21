import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput as Input } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'

interface TextProps {
  placeholder: string
  secureTextEntry: boolean
  value: any
  setValue: any
  maxLength: number,

}
const TextInput: React.FC<TextProps> = ({
  placeholder,
  secureTextEntry = false,
  value,
  setValue,
  maxLength,
}) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={"gray"}
        value={value}
        onChangeText={(text) => setValue(text)}
        maxLength={maxLength}
      />
      {/* {description && !errorText ? (
        <Text>{description}</Text>
      ) : null}
      {errorText ? <Text> {errorText} </Text> : null} */}
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  container: {

  },
  input: {
    borderRadius: widthPercentageToDP(3),
    color: '#000',
    paddingLeft: widthPercentageToDP(3),
    // marginTop: 5,
    paddingTop: 0
  },
})