import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/Colors';
import CustomButton from '@/components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ProfileScreen = () => {
    const router = useRouter();

    const logout = async () => {
        await AsyncStorage.removeItem('EMAIL');
        // router.push('/auth/Signin')
    }

    return (
        <View style={styles.container}>
            <View style={{ margin: 10, marginTop: 20 }}>
                <View style={styles.screenwrap}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="settings" size={hp(3)} color="black" />
                        <Text style={{ fontSize: hp(2.3), fontWeight: '600', paddingLeft: 30 }}>Settings</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={hp(3)} color="black" onPress={() => router.push('/Screen/Settings')} />
                </View>
                <View style={styles.screenwrap}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="settings" size={hp(3)} color="black" />
                        <Text style={{ fontSize: hp(2.3), fontWeight: '600', paddingLeft: 30 }}>Order</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={hp(3)} color="black" onPress={() => router.push('/Screen/Order')} />
                </View>
                <View style={styles.screenwrap}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="settings" size={hp(3)} color="black" />
                        <Text style={{ fontSize: hp(2.3), fontWeight: '600', paddingLeft: 30 }}>Address</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={hp(3)} color="black" onPress={() => router.push('/Screen/Address')} />
                </View>
                <View style={styles.screenwrap}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="settings" size={hp(3)} color="black" />
                        <Text style={{ fontSize: hp(2.3), fontWeight: '600', paddingLeft: 30 }}>Contect Us</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={hp(3)} color="black" onPress={() => router.push('/Screen/Settings')} />
                </View>
                <View style={styles.screenwrap}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="settings" size={hp(3)} color="black" />
                        <Text style={{ fontSize: hp(2.3), fontWeight: '600', paddingLeft: 30 }}>Help</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={hp(3)} color="black" onPress={() => router.push('/Screen/Settings')} />
                </View>
                <View style={styles.screenwrap}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="settings" size={hp(3)} color="black" />
                        <Text style={{ fontSize: hp(2.3), fontWeight: '600', paddingLeft: 30 }}>Language</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={hp(3)} color="black" onPress={() => router.push('/Screen/Settings')} />
                </View>
            </View>
            <View style={{ padding: 10, position: 'absolute', bottom: 0, width: '100%' }}>
                <CustomButton
                    title='Log out'
                    TextColor='#fff'
                    BgColor='#000'
                    borderTopLeftRadius={10}
                    borderBottomLeftRadius={10}
                    borderBottomRightRadius={10}
                // onPress={logout()}
                />
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 25,
        height: hp(67)
    },
    screenwrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        padding: 20,
        backgroundColor: theme.colors.onSecondary,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 5

    }
})