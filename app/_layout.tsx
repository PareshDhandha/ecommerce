import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux'
import { store } from './store/Store';

import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter()
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    const getdata = async () => {
      const email = await AsyncStorage.getItem('EMAIL');
      setIsLogin(email)
    }
    getdata();
  }, [])

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
          {
            !isLogin ? (<Stack.Screen name='auth/Signin' />) : (
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            )
          }
          {/* <Stack.Screen name="Screen/SingleDetails" /> */}
        </Stack>
        <StatusBar style='auto' />
      </Provider>
    </ThemeProvider>
  );
}
