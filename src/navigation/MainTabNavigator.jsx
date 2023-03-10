/* eslint-disable react/prop-types */
// import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Box, Image, Text, Button, View } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../hooks';
import { SvgXml } from 'react-native-svg';
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen"
const tabIconHomeSelect = require('../assets/img/icons-home-page-1.png')
const tabIconSettingNoSelect = require('../assets/img/icons-settings-2.png')

const Tab = createBottomTabNavigator();

export default function BottomTabs({ navigation }) {
  const {icons} = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarStyle: {
        //   elevation: 30,
        //   backgroundColor: '#fff',
        //   position: 'absolute',
        //   bottom: 0,
        //   padding: 10,
        //   width: '100%',
        //   borderTopWidth: 1,
        //   borderTopColor: '#EDEDED',
        //   height: 85,
        //   zIndex: 0,
        // },
      }}>
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle: {
              elevation: 30,
              backgroundColor: '#fff',
              bottom: 0,
              padding: 10,
              width: '100%',
              borderTopWidth: 1,
              borderTopColor: '#EDEDED',
              height: 85,
              zIndex: 0,
            },
            tabBarIcon: () => (
            <>
              <Box 
                style={[styles.tabBarItemContainer, styles.tabBarIconFocused]}
                boxSize={65}
                shadow={3}
                pt={1}
                px={0}
              >
                <Image
                  resizeMode={"contain"}
                  alt="Home"
                  source={tabIconHomeSelect}
                  boxSize={45}
                />
                <Text
                  style={{ fontSize: 12}}
                  fontFamily={'Sarabun-SemiBold'}
                  color={"white"}
                  bottom={2}
                >
                  Home
                </Text>
              </Box>
            </>
            ),
            tabBarLabel: "",
            headerShown: false,
        }}
        />
        <Tab.Screen 
          name="modal"
          options={{
            tabBarStyle: {
              backgroundColor: '#666AF6',
              alignItems:'center',
              position: 'absolute',
              left: '80%',
              bottom: 5,
              zIndex: 3,
              justifyContent: 'center',
              width: 70,
              height: 70,
              borderRadius: 40,
            },
            tabBarIcon: () => {
              <>
                <Box
                  // onPress={() => navigation.navigate('SettingScreen')}
                  backgroundColor={'#666AF6'}
                  alignItems={'center'}
                  position={'absolute'}
                  left={'80%'}
                  bottom={5}
                  zIndex={3}
                  justifyContent={'center'}
                  width={70}
                  height={70}
                  borderRadius={40}
                >
                  <SvgXml stroke={'#fff'} width="40" height="40" xml={icons.plus} />
                </Box>
              </>
            }
          }}
        />
        <Tab.Screen 
          name="Setting"
          component={SettingsScreen}
          options={{
            tabBarStyle: {
              elevation: 30,
              backgroundColor: '#fff',
              bottom: 0,
              padding: 10,
              width: '100%',
              borderTopWidth: 1,
              borderTopColor: '#EDEDED',
              height: 85,
              zIndex: 0,
            },
            tabBarIcon: () => (
            <>
              <Box 
                style={[styles.tabBarItemContainer, styles.tabBarIconFocused]}
                boxSize={65}
                shadow={2}
                pt={1}
                px={0}
              >
                <Image
                  resizeMode={"contain"}
                  alt="Home"
                  source={tabIconSettingNoSelect}
                  boxSize={35}
                />
                <Text
                  style={{ fontSize: 12}}
                  fontFamily={'Sarabun-SemiBold'}
                  color={"black"}
                  bottom={1}
                >
                  Setting
                </Text>
              </Box>
            </>
            ),
            tabBarLabel: "",
            headerShown: false,
        }}
        />   
      {/* ))} */}
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
