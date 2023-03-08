import moment from 'moment';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
// console.log(moment().format("LT"))
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function getFullDateNow() {
  return moment().format("dddd-MMMM-DD-MM-YYYY")
}

export function getDateNow() {
  return moment().format("DD-MM-YYYY");
}

export function getMonthText(date) {
  return `${monthNames[date]}`
  // return `${date.toLocaleString('en-us', { month: 'long' })}`
}

export function getDataMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

export function getFormatDateFromCalendar(date) {
  return `${date.getFullYear()}-${padTo2Digits(date.getMonth()+1)}-${padTo2Digits(date.getDate())}`
}