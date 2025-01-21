import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import LottieView from 'lottie-react-native'

const Order = () => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                {/* <LottieView
                    autoPlay
                    source={require('../../assets/anione.json')}
                    style={{
                        width: 200,
                        height: 200,
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: '50%'
                    }}
                /> */}
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>Order Sucessful</Text>
            </View>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({})