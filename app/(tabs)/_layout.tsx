import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import TabBar from '@/components/TabBar'
import { HeartIcon, HomeIcon, ShoppingCartIcon, UserIcon } from 'react-native-heroicons/outline';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (

    <Tabs
      // tabBar={props => <TabBar {...props}/>}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Save"
        options={{
          title: 'Save',
          tabBarIcon: ({ color, focused }) => (
            <HeartIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <ShoppingCartIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <UserIcon color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
