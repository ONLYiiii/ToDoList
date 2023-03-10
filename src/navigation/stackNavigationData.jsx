// import TabNavigator from './MainTabNavigator';

import SplashScreen from '../screens/SplashScreen'
import IntroScreen from '../screens/IntroScreen'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreateScreen from '../screens/CreateScreen';
import { CreateAcitivityTest, ScrollTimePicker } from '../components';

// const headerLeftComponent = (props) => {
//   return (
//     <TouchableOpacity
//       onPress={props.onPress}
//       style={{
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//       }}
//     >
//       <Image
//         source={require('../assets/icons/arrow-back.png')}
//         resizeMode="contain"
//         style={{
//           height: 20,
//         }}
//       />
//     </TouchableOpacity>    
//   )
// }

const StackNavigationData = [
  // {
  //   id: 0,
  //   name: 'MainTabNavigator',
  //   component: TabNavigator,
  //   headerLeft: null,
  //   headerShown: false,
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
  {
    id: 5,
    name: 'HomeScreen',
    component: HomeScreen,
    headerLeft: null,
    headerShown: false
  },
  {
    id: 6,
    name: 'SettingsScreen',
    component: SettingsScreen,
    headerLeft: null,
    headerShown: false
  },
  {
    id: 7,
    name: 'CreateScreen',
    component: CreateScreen,
    headerLeft: null,
    headerShown: false
  },
  {
    id: 8,
    name: 'CreateAcitivityTest',
    component: CreateAcitivityTest,
    headerLeft: null,
    headerShown: false
  },
  // {
  //   id: 9,
  //   name: 'ScrollTimePicker',
  //   component: ScrollTimePicker,
  //   headerLeft: null,
  //   headerShown: false
  // },
]

export default StackNavigationData;
