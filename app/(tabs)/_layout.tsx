import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import TabBar from '@/components/TabBar'
import { HeartIcon, HomeIcon, ShoppingCartIcon, UserIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import { Image, View, Text } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const saveItem = useSelector(state => state.wish)
  const cartItem = useSelector(state => state.cart)
  return (

    <Tabs
      // tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                <Image source={require('../images/home.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? color : '#000'
                  }}
                />
              </View>
            )
          }
        }}
      />

      <Tabs.Screen
        name="Save"
        options={{
          title: 'Save',
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                <Image source={require('../images/heart.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? color : '#000'
                  }} />
                <View style={{
                  position: 'absolute',
                  right: -3,
                  bottom: 16,
                  backgroundColor: "#E96E6E",
                  width: 14,
                  height: 14,
                  borderRadius: 7,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style={{ color: '#fff', fontSize: 10 }}>{saveItem.length}</Text>
                </View>
              </View>
            )

          },
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                <Image source={require('../images/cart.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? color : '#000'
                  }} />
                <View style={{
                  position: 'absolute',
                  right: -7,
                  bottom: 16,
                  backgroundColor: "#E96E6E",
                  width: 14,
                  height: 14,
                  borderRadius: 7,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style={{ color: '#fff', fontSize: 10 }}>{cartItem.length}</Text>
                </View>
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                <Image source={require('../images/ustb.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? color : '#000'
                  }} />
              </View>
            )
          }
        }}
      />

    </Tabs>
  );
}
