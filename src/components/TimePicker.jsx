/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useData } from '../hooks'
import { getFormatDateFromCalendar } from "../utils/date";

const TimePicker = ({showTimePicker,onShowTimePickerChange}) => {
  const {mock, setMock} = useData()

  const handleConfirm = (time) => {
    console.log("A date has been picked: ",  time.toLocaleTimeString())
    onShowTimePickerChange()
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
      isVisible={showTimePicker}
      mode="time"
      onConfirm={handleConfirm}
      onCancel={onShowTimePickerChange}
    />
  )
}

export default TimePicker