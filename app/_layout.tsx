import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux'
import { store } from './store/Store';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.


export default function RootLayout() {
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="auth/Login" />
          <Stack.Screen name="auth/SignUp" />
          {/* <Stack.Screen name="Screen/SingleDetails" /> */}
        </Stack>
      </Provider>
    </ThemeProvider>
  );
}
