import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

interface ButtonProps {
    title: string,
    onPress: string
}
const CustomButton: FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <View style={styles.btn}>
            <TouchableOpacity onPress={onPress}>
                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600' }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        color: '#fff',
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 25,

    }
})