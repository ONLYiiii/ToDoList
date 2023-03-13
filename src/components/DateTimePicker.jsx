/* eslint-disable react/prop-types */
import { Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useData } from '../hooks'
import { getFormatDateFromCalendar, getMonthText, getDateNow } from "../utils/date";

const DateTimePicker = ({mode,showCalendar,setShowCalendar, editActivity}) => {
  // console.log("edit ", editActivity)
  const {setNewDate} = useData()

  const handleConfirm = (date) => {
    console.log("A date has been picked: ",  getFormatDateFromCalendar(date));
    {getFormatDateFromCalendar(date) != "" ?
      setNewDate({
        day: editActivity ? editActivity.split('-')[2] : getFormatDateFromCalendar(date).split('-')[2],
        monthText: getMonthText(editActivity ? editActivity.split('-')[1]-1 : getFormatDateFromCalendar(date).split('-')[1]-1),
        monthNum: editActivity ? editActivity.split('-')[1] : getFormatDateFromCalendar(date).split('-')[1],
        year: editActivity ? editActivity.split('-')[0] : getFormatDateFromCalendar(date).split('-')[0],
        fullDate: editActivity ? editActivity : getFormatDateFromCalendar(date),
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
      date={editActivity ? new Date(editActivity): new Date(getDateNow())}
      mode={mode}
      onConfirm={handleConfirm}
      onCancel={() => setShowCalendar(false)}
    />
  )
}

export default DateTimePicker