import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput as Input } from 'react-native'

interface TextProps {
  placeholder: string
  secureTextEntry: boolean
  value: any
  setValue: any
  outlineStyle: any
  maxLength: number,
  props: any,

}
const TextInput: React.FC<TextProps> = ({
  placeholder,
  secureTextEntry = false,
  value,
  setValue,
  outlineStyle,
  maxLength,
  ...props
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
        {...props}
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
    borderRadius: 13,
    color: '#000',
    paddingLeft: 10,
  },
})