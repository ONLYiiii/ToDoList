/* eslint-disable react/prop-types */
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useData } from '../hooks'
import { getFormatDateFromCalendar, getMonthText } from "../utils/date";

const Calendar = ({showCalendar,setShowCalendar}) => {
  const {setNewDate} = useData()

  const handleConfirm = (date) => {
    // console.log("A date has been picked: ",  getFormatDateFromCalendar(date));
    setNewDate({
      day: getFormatDateFromCalendar(date).split('-')[2],
      monthText: getMonthText(getFormatDateFromCalendar(date).split('-')[1]-1),
      monthNum: getFormatDateFromCalendar(date).split('-')[1],
      year: getFormatDateFromCalendar(date).split('-')[0],
      fullDate: getFormatDateFromCalendar(date),
    })
    setShowCalendar()
  };

  return (
    <DateTimePickerModal
      isVisible={showCalendar}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={setShowCalendar}
    />
  )
}

export default Calendar