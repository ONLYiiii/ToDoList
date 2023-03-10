import {Dimensions} from 'react-native';
import alarmIcon from "../assets/icons/alarm-fill.svg"
import bookEducationIcon from '../assets/icons/book-education.svg'
import codingBrowserIcon from '../assets/icons/coding-browser.svg'
import consoleControllerIcon from '../assets/icons/console-controller.svg'
import dumbbellIcon from '../assets/icons/dumbbell-gym.svg'
import moonIcon from '../assets/icons/moon.svg'
import paintPalletteIcon from '../assets/icons/paint-pallette.svg'
import plusIcon from '../assets/icons/plus2.svg'
import restaurantIcon from '../assets/icons/restaurant.svg'
import runIcon from '../assets/icons/run.svg'
import schoolIcon from '../assets/icons/school-solid.svg'
import shoppingCartIcon from '../assets/icons/shopping-cart.svg'
import tvIcon from '../assets/icons/tv-fill.svg'

const {width, height} = Dimensions.get('screen');

export const ICONS = {
  apple: require('../assets/img/apple.png'),
  facebook: require('../assets/img/facebook.png'),
  google: require('../assets/img/google.png'),
  arrow: require('../assets/img/arrow.png'),
  backbtn: require('../assets/img/backBtn.png'),
  warningInput: require('../assets/img/gpp_maybe.png'),
  tabIconHomeSelect: require('../assets/img/icons-home-page-1.png'),
  tabIconSettingSelect: require('../assets/img/icons-settings-1.png'),
  tabIconSettingNoSelect: require('../assets/img/icons-settings-2.png'),
  alarm: alarmIcon,
  bookEducation: bookEducationIcon,
  codingBrowser: codingBrowserIcon,
  consoleController: consoleControllerIcon,
  dumbbell: dumbbellIcon,
  moon: moonIcon,
  paintPallette: paintPalletteIcon,
  plus: plusIcon,
  restaurant: restaurantIcon,
  run: runIcon,
  school: schoolIcon,
  shoppingCart: shoppingCartIcon,
  tv: tvIcon,

}

export const ASSETS = {
  // fonts
  SarabunRegular: require('../assets/fonts/Sarabun-Regular.ttf'),
  SarabunMedium: require('../assets/fonts/Sarabun-Medium.ttf'),
  SarabunSemiBold: require('../assets/fonts/Sarabun-SemiBold.ttf'),
  SarabunExtraBold: require('../assets/fonts/Sarabun-ExtraBold.ttf'),
  SarabunBold: require('../assets/fonts/Sarabun-Bold.ttf'),
  KanitRegular: require('../assets/fonts/Kanit-Regular.ttf'),
  KanitMedium: require('../assets/fonts/Kanit-Medium.ttf'),
  KanitSemiBold: require('../assets/fonts/Kanit-SemiBold.ttf'),
  KanitExtraBold: require('../assets/fonts/Kanit-ExtraBold.ttf'),
  KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),

  // background/logo
  IntroGetStarted: require("../assets/img/IntroGetStarted.png"),
  IntroListEvent: require("../assets/img/IntroListEvent.png"),
  IntroAlert: require("../assets/img/IntroAlert.png"),
  startScreen: require('../assets/img/startScreen.png'),
  loginScreen: require('../assets/img/loginScreen.png'),
  registerScreen: require('../assets/img/registerScreen.png')
}

export const LINE_HEIGHTS = {
  // font lineHeight
  text: 22,
  h1: 60,
  h2: 55,
  h3: 43,
  h4: 33,
  h5: 24,
  p: 22,
}

export const GRADIENTS = {
  primary: ['#FF0080', '#7928CA'],
  secondary: ['#A8B8D8', '#627594'],
  info: ['#21D4FD', '#2152FF'],
  success: ['#98EC2D', '#17AD37'],
  warning: ['#FBCF33', '#F53939'],
  danger: ['#FF667C', '#EA0606'],

  light: ['#EBEFF4', '#CED4DA'],
  dark: ['#3A416F', '#141727'],

  white: ['#ffffff', '#EBEFF4'],
  black: ['#252F40', '#141727'],

  divider: ['rgba(255,255,255,0.3)', 'rgba(102, 116, 142, 0.6)'],
  menu: [
      'rgba(255, 255, 255, 0.2)',
      'rgba(112, 125, 149, 0.5)',
      'rgba(255, 255, 255, 0.2)',
  ],
}

export const THEME = {
  assets: ASSETS,
  icons: ICONS,
  // fonts: FONTS,
  gradients: GRADIENTS,
  lines: LINE_HEIGHTS,
  sizesWidget: {width, height},
}
