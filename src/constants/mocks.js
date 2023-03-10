import {THEME as light} from './light';
import { getFullDateNow, getDateNow } from '../utils/date';

export const imageDataSignIn = [
  {
    name: 'Facebook',
    color: '#CFDFFF',
    img: light.assets.facebook,
  },
  {
    name: 'Google',
    color: '#FFE7C2',
    img: light.assets.google,
  },
  {
    name: 'Apple',
    color: '#DBDBDB',
    img: light.assets.apple,
  }
]

export const selectedDate = {
    day: getFullDateNow().split('-')[2],
    monthText: getFullDateNow().split('-')[1],
    monthNum: getFullDateNow().split('-')[3],
    year: getFullDateNow().split('-')[4],
    fullDate: getDateNow(),
}

export const newTimeSelected = {
  time: getDateNow(),
}

// export const iconActivity = [
//   light.icons.alarmIcon,
//   light.icons.bookEducation,
//   light.icons.codingBrowser,
//   light.icons.consoleController,
//   light.icons.dumbbell,
//   light.icons.moon,
//   light.icons.paintPallette,
//   light.icons.plus,
//   light.icons.restaurant,
//   light.icons.run,
//   light.icons.school,
//   light.icons.shoppingCart,
//   light.icons.tv,
// ]

export const iconActivity = [
  {
    id: 1,
    icon: light.icons.alarm,
  },
  {
    id: 2,
    icon: light.icons.bookEducation,
  },
  {
    id: 3,
    icon: light.icons.codingBrowser,
    // stroke: true
  },
  {
    id: 4,
    icon: light.icons.consoleController,
    // stroke: false
  },
  {
    id: 5,
    icon: light.icons.dumbbell,
    // stroke: false
  },
  {
    id: 6,
    icon: light.icons.paintPallette,
    // stroke: false
  },
  {
    id: 7,
    icon: light.icons.plus,
    // stroke: true
  },
  {
    id: 8,
    icon: light.icons.restaurant,
  },
  {
    id: 9,
    icon: light.icons.run,
  },
  {
    id: 10,
    icon: light.icons.school,
  },
  {
    id: 11,
    icon: light.icons.shoppingCart,
  },
  {
    id: 12,
    icon: light.icons.tv,
  }
]