import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={{ padding: 20, }}>
                <View style={styles.screenwrap}>
                    <Ionicons name="settings" size={24} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Settings</Text>
                    <Ionicons name="chevron-forward" size={24} color="black" onPress={() => router.push('/Screen/Settings')} />
                </View>
                <View style={styles.screenwrap}>
                    <Ionicons name="settings" size={24} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Settings</Text>
                    <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
                <View style={styles.screenwrap}>
                    <Ionicons name="settings" size={24} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Settings</Text>
                    <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
                <View style={styles.screenwrap}>
                    <Ionicons name="settings" size={24} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Settings</Text>
                    <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 477
    },
    screenwrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        marginVertical: 20
    }
})