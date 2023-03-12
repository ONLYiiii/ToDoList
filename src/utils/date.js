import moment from 'moment';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]
const newDate = new Date()

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

export function getDataMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

export function getFormatDateFromCalendar(date) {
  // return `${date.getFullYear()}-${padTo2Digits(date.getMonth()+1)}-${padTo2Digits(date.getDate())}`
  // console.log(date.getDate() + " | ", (new Date().getDate()))
  if (date.getDate() >= (new Date().getDate())) {
    return date.toISOString().slice(0,10)
  } else {
    return ""
  }
}

export function checkTimeSelected(time) {
  // if("21:00" ==)
  console.log(new Date())
}

export function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${padTo2Digits(hours)} ชั่วโมง ${padTo2Digits(minutes)} นาที`;
}