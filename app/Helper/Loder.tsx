import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loder = (props: any) => {
    return (
        <View>
            <ActivityIndicator style={{ marginTop: 250 }} {...props} />
        </View>
    )
}

export default Loder

const styles = StyleSheet.create({})