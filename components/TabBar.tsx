import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Cog8ToothIcon, HeartIcon, HomeIcon, UserIcon } from 'react-native-heroicons/outline';
import TabBarButton from './TabBarButton';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'



const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        console.log('route.........',route.name)
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabsitem}
            routeName = {route.name}
            color = {"gray"}
            label = {label}
            isFocused = {isFocused}
          />
        )
        // return (
        //   <TouchableOpacity
        //     key={route.name}
        //     accessibilityRole="button"
        //     accessibilityState={isFocused ? { selected: true } : {}}
        //     accessibilityLabel={options.tabBarAccessibilityLabel}
        //     testID={options.tabBarTestID}
        //     onPress={onPress}
        //     onLongPress={onLongPress}
        //     style={styles.tabsitem}
        //   >
        //     {console.log('iconshome....', icons[route.name])}
        //     {(icons).map((item: any) => (
        //       { item }
        //     ))}
        //     <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
        //       {label}
        //     </Text>
        //   </TouchableOpacity>
        // );
      })}
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: 5,
    paddingVertical: 30,
    borderCurve: 'continuous',
  },
  tabsitem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})