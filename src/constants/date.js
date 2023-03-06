import moment from 'moment';
const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const datemoment = moment().format("dddd-MMMM-DD-MM-YYYY");

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function getFormattedDate() {
  return datemoment
}

export function getDataMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

export function getMonthText(month) {
  return `${monthNames[month]}`
}

export function getDateNow() {
  return moment().format("DD-MM-YYYY");
}

// console.log("format date: ", getFormattedDate(date))
// console.log("getDate: ", monthNames[date.getMonth()+1])

// function getWeekDays(locale)
// {
//     var baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
//     var weekDays = [];
//     for(i = 0; i < 7; i++)
//     {       
//         weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
//         baseDate.setDate(baseDate.getDate() + 1);       
//     }
//     return weekDays;
// } 

// var weekDays = getWeekDays('nl-NL');