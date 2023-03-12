/* eslint-disable react/prop-types */
import { Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useData } from '../hooks'
import { getFormatDateFromCalendar, getMonthText } from "../utils/date";

const DateTimePicker = ({mode,showCalendar,setShowCalendar}) => {
  const {setNewDate} = useData()

  const handleConfirm = (date) => {
    console.log("A date has been picked: ",  getFormatDateFromCalendar(date));
    {getFormatDateFromCalendar(date) != "" ?
      setNewDate({
        day: getFormatDateFromCalendar(date).split('-')[2],
        monthText: getMonthText(getFormatDateFromCalendar(date).split('-')[1]-1),
        monthNum: getFormatDateFromCalendar(date).split('-')[1],
        year: getFormatDateFromCalendar(date).split('-')[0],
        fullDate: getFormatDateFromCalendar(date),
      })
      :
      Alert.alert('แจ้งเตือน', 'ห้ามใส่วันที่ย้อนหลังวันที่ปัจจุบัน', [
        {text: 'OK'},
      ])
    }
    setShowCalendar(false)
  };

  return (
    <DateTimePickerModal
      isVisible={showCalendar}
      mode={mode}
      onConfirm={handleConfirm}
      onCancel={() => setShowCalendar(false)}
    />
  )
}

export default DateTimePicker