/* eslint-disable react/prop-types */
// import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Box, Image, Text, Button, View } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import tabNavigationData from './tabNavigationData';

const Tab = createBottomTabNavigator();

export default function BottomTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 30,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          padding: 10,
          width: '100%',
          borderTopWidth: 1,
          borderTopColor: '#EDEDED',
          height: 85,
          zIndex: 0,
        }
      }}>
      {tabNavigationData.map((item) => (
        <Tab.Screen 
          key={item.id}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) => (
            <>
              {item.id != 2 && <Box 
                style={[styles.tabBarItemContainer, focused && styles.tabBarIconFocused]}
                boxSize={65}
                shadow={ focused ? 5 : 1}
                pt={1}
              >
                <Image
                  resizeMode={"contain"}
                  alt={item.name}
                  source={focused ? item.iconSelect : item.iconNoSelect}
                  boxSize={item.id === 1 ? 45 : 35}
                />
                <Text
                  style={{ fontSize: 12}}
                  fontFamily={'Sarabun-SemiBold'}
                  color={focused ? "white" : "black"}
                  bottom={ item.id === 1 ? 2 : 1}
                >
                  {item.name}
                </Text>
              </Box>}
              {item.id == 2 && <Box
                // onPress={() => navigation.navigate('SettingScreen')}}
                backgroundColor={'#666AF6'}
                alignItems={'center'}
                position={'absolute'}
                bottom={5}
                zIndex={3}
                alignSelf={'center'}
                justifyContent={'center'}
                width={70}
                height={70}
                borderRadius={40}
              >
                <View>
                    <AntDesign name="plus" size={50} color="white" />
                </View>
              </Box>}
            </>
            ),
          tabBarLabel: "",
          headerShown: false
        }}
        />        
      ))}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EDEDED',
    paddingHorizontal: 10,
    bottom: Platform.OS === 'ios' ? -4 : 0,
  },
  tabBarIconFocused: {
    backgroundColor: '#878AF5',
    borderWidth: 0,
    // borderColor: '#EDEDED',
  },
});
