import { TouchableOpacity, Image } from 'react-native';

// import TabNavigator from './MainTabNavigator';

import SplashScreen from '../screens/SplashScreen'
import IntroScreen from '../screens/IntroScreen'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen'

const headerLeftComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
    >
      <Image
        source={require('../assets/icons/arrow-back.png')}
        resizeMode="contain"
        style={{
          height: 20,
        }}
      />
    </TouchableOpacity>    
  )
}

const StackNavigationData = [
  // {
  //   name: 'MainTabNavigator',
  //   component: TabNavigator,
  //   headerLeft: null,
  // },
  {
    id: 1,
    name: 'SplashScreen',
    component: SplashScreen,
    headerLeft: null,
    headerShown: false
    // headerBackground: { source: headerBackground },
  },
  {
    id: 2,
    name: 'IntroScreen',
    component: IntroScreen,
    headerLeft: null,
    headerShown: false
  },
  {
    id: 3,
    name: 'SignInScreen',
    component: SignInScreen,
    headerLeft: null,
    headerShown: false
  },
  {
    id: 4,
    name: 'SignUpScreen',
    component: SignUpScreen,
    headerLeft: null,
    headerShown: false
  },
]

export default StackNavigationData;
