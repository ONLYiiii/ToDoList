/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useData } from '../hooks'
import { getFormatDateFromCalendar } from "../utils/date";

const Calendar = ({showCalendar,onShowCalenderChange}) => {
  const {mock, setMock} = useData()

  const handleConfirm = (date) => {
    console.log("A date has been picked: ",  getFormatDateFromCalendar(date));
    onShowCalenderChange()
  };

  // useEffect(() => {
  //   if (selectedDate != "") {
  //     setMock({
  //       date: {
  //         day: selectedDate.split('-')[2],
  //         monthText: getMonthText(Number(selectedDate.split('/')[1]-1)),
  //         monthNum: selectedDate.split('/')[1],
  //         year: selectedDate.split('/')[0],
  //         fullDate: selectedDate,
  //       }
  //     })
  //   }
  // }, [selectedDate])

  return (
    <DateTimePickerModal
      isVisible={showCalendar}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={onShowCalenderChange}
    />
  )
}

export default Calendar