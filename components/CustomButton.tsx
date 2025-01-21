import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'

interface ButtonProps {
    title: string,
    onPress(): void,
    BgColor: string,
    TextColor: string,
    borderRadius: number,
    borderTopLeftRadius: number,
    borderBottomLeftRadius: number,
    borderBottomRightRadius: number,

}
const CustomButton: FC<ButtonProps> = ({
    title,
    onPress,
    BgColor,
    TextColor,
    borderRadius,
    borderTopLeftRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius
}) => {
    return (
        <View style={{
            padding: 14,
            backgroundColor: BgColor,
            borderRadius: borderRadius,
            borderTopLeftRadius: borderTopLeftRadius,
            borderBottomLeftRadius: borderBottomLeftRadius,
            borderBottomRightRadius: borderBottomRightRadius
        }}>
            <TouchableOpacity onPress={onPress}>
                <Text style={{ textAlign: 'center', fontSize: heightPercentageToDP(2.5), color: TextColor, fontWeight: '600' }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
})