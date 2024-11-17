import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const ProfileModal = () => {
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handleOpenPress = () => bottomSheetModalRef.current?.expand();
    const handleClosePress = () => bottomSheetModalRef.current?.close();

    return (
        <View>
            <TouchableOpacity onPress={handleOpenPress} style={styles.image}>
                <Image source={require('../images/dp.jpeg')} style={styles.dp} />
            </TouchableOpacity>
            <View style={styles.container}>
                <BottomSheetModalProvider>
                    <BottomSheetModal
                        snapPoints={snapPoints}
                        ref={bottomSheetModalRef}
                    >
                        <Text>Hello</Text>
                    </BottomSheetModal>
                </BottomSheetModalProvider>
            </View>
        </View>
    )
}

export default ProfileModal

const styles = StyleSheet.create({
    image: {
        padding: 10
    },
    dp: {
        width: 130,
        height: 140,
        borderRadius: 100,
    },
    container: {
        flex: 1,

    }
})