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

export const iconActivity = [
  "silverware-fork-knife",
  "cart",
  "run-fast",
  "television",
  "moon-waning-crescent",
  "account-school-outline",
  "controller",
  "dumbbell",
  "plus",
]