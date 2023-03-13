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

export const newDateStrip = {
  dateStrip: getDateNow(),
}

export const iconActivity = [
  {
    name: "กินข้าว",
    icon: light.icons.restaurant,
  },
  {
    name: "ซื้อของ",
    icon: light.icons.shoppingCart,
  },
  {
    name: "วิ่ง",
    icon: light.icons.run,
  },
  {
    name: "ดูหนัง",
    icon: light.icons.tv,
  },
  {
    name: "นอนหลับ",
    icon: light.icons.moon,
  },
  {
    name: "ไปเรียน",
    icon: light.icons.school,
  },
  {
    name: "เล่นเกม",
    icon: light.icons.consoleController,
  },
  {
    name: "ฟิตเนส",
    icon: light.icons.dumbbell,
  },
  {
    name: "เพิ่มเติม",
    icon: light.icons.plus,
  },
  {
    name: "อ่านหนังสือ",
    icon: light.icons.bookEducation,
  },
  {
    name: "เขียนโค้ด",
    icon: light.icons.codingBrowser,
  },
  {
    name: "วาดรูป",
    icon: light.icons.paintPallette,
  },
  {
    name: "ตื่นนอน",
    icon: light.icons.alarm,
  }
]