import moment from 'moment';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function getFullDateNow() {
  return moment().format("dddd-MMMM-DD-MM-YYYY")
}

export function getDateNow() {
  return moment().format("YYYY-MM-DD");
}

export function getMonthText(date) {
  return `${monthNames[date]}`
}

export function getFormatDate(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export function getFormatDateFromCalendar(date) {
  if (date.getDate() >= (new Date().getDate())) {
    return `${date.getFullYear()}-${padTo2Digits(date.getMonth()+1)}-${padTo2Digits(date.getDate())}`
  } else {
    return ""
  }
}

export function checkTimeSelected(time, date) {
  const timeNow = new Date()
  console.log("true | " + timeNow.getHours() + ":" + timeNow.getMinutes() + " | " + time.split(":")[0] + ":" + time.split(":")[1] + " :: " + date + " " + moment().format("YYYY-MM-DD"))
  if((+timeNow.getHours() < +time.split(":")[0] || (+timeNow.getHours() == +time.split(":")[0] && +timeNow.getMinutes() < +time.split("S:")[1]))) {
    return true
  } else if ((new Date(date) >= new Date(moment().format("YYYY-MM-DD")))) {
    return true
  } else {
    return false
  }
}

export function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${padTo2Digits(hours)} ชั่วโมง ${padTo2Digits(minutes)} นาที`;
}