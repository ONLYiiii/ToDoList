/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import { DatePickerModal } from 'react-native-paper-dates';

import { useData } from '../hooks'
import { getMonthText } from "../constants/date";

const Calendar = ({showCalendar, onShowCalenderChange}) => {
  // const {date, setDate} = useData()
  const [date, setDate] = useState(undefined);
  // const [open, setOpen] = useState(!showCalendar);

  const onDismissSingle = useCallback(() => {
    onShowCalenderChange(false);
  }, [onShowCalenderChange]);

  const onConfirmSingle = useCallback(
    (params) => {
      onShowCalenderChange(false);
      setDate(params.date);
    },[onShowCalenderChange, setDate]
  );
  // console.log("date")

  // useEffect(() => {
  //   if (selectedDate != "") {
  //     setDate({
  //       day: selectedDate.split('-')[2],
  //       monthText: getMonthText(Number(selectedDate.split('/')[1]-1)),
  //       monthNum: selectedDate.split('/')[1],
  //       year: selectedDate.split('/')[0],
  //       fullDate: selectedDate,
  //     })
  //   }
  // }, [selectedDate])

  return (
      // <DatePicker
      //   isGregorian={true}
      //   options={{
      //     backgroundColor: '#F0F0F0',
      //     textHeaderColor: '#000000',
      //     textDefaultColor: '#000000',
      //     textSecondaryColor: '#000000',
      //     selectedTextColor: '#fff',
      //     mainColor: '#666AF6',
      //     defaultFont: 'Sarabun-Medium',
      //     headerFont: 'Kanit-Medium',
      //   }}
      //   current={date.fullDate}
      //   selected={date.fullDate}
      //   mode="calendar"
      //   minuteInterval={30}
      //   onSelectedChange={date => setSelectedDate(date)}
      //   // onDateChange={date => console.log(date)}
      //   // style={{ borderRadius: 10, padding: 0, margin: 0 }}
      // />
    <DatePickerModal
      locale="en"
      mode="single"
      visible={showCalendar}
      onDismiss={onDismissSingle}
      date={date}
      onConfirm={onConfirmSingle}
    />
  )
}

export default Calendar