import {THEME as light} from './light';
import { getFormattedDate, getDateNow } from './date';

export const IMAGEDATA = [
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
    day: getFormattedDate().split('-')[2],
    monthText: getFormattedDate().split('-')[1],
    monthNum: getFormattedDate().split('-')[3],
    year: getFormattedDate().split('-')[4],
    fullDate: getDateNow(),
}

export const newDateSelect = {
  fullDate: getDateNow(),
}


export const Mock = {
  image: IMAGEDATA,
  date: selectedDate,
}