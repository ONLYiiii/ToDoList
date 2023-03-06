import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

const TimePicker = () => {
  const [time, setTime] = useState('');
  console.log(time)
  return (
    <DatePicker
      isGregorian={true}
      mode="time"
      current={"2023-03-05"}
      // minuteInterval={3}
      onTimeChange={selectedTime => setTime(selectedTime)}
    />
  )
}

export default TimePicker