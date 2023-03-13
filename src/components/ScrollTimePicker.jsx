/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { hourData, minuteData } from '../utils/timeScrollPicker';

export default function ScrollTimePicker({mode, color, warpperColor, handlerCreateActivity, timestartEdit}) {
  const [timeHour, setTimeHour] = useState("00")
  const [timeMinute, setTimeMinute] = useState("00")
  // const [timeValue, setTimeValue] = useState({
  //   hour: "00",
  //   minute: "00"
  // });

  // const handlerTimeSelectHour = (value) => {
  //   setTimeValue(prevState => {
  //     return { ...prevState, hour: value}
  //   });
  // };

  // const handlerTimeSelectMinute = (value) => {
  //   setTimeValue(prevState => {
  //     return { ...prevState, minute: value}
  //   });
  // };

  useEffect(() => {
    // console.log(timeValue.minute)
    mode == "timestart" ?
      handlerCreateActivity("timestart", `${timeHour}:${timeMinute}`)
    : 
      handlerCreateActivity("howlong", `${(Number(timeHour) * 60) + Number(timeMinute)}`)
  }, [timeHour, timeMinute])
  

  return (
    <View style={{
      alignSelf: 'center',
      flexDirection: 'row'
    }}>
      <View style={{width:80 ,height: 170}}>
        <ScrollPicker
          dataSource={hourData}
          renderItem={(data, index, isSelected) => (
            <Text style={isSelected && { color: color }}>{data}</Text>
          )}
          selectedIndex={timestartEdit ? timestartEdit.split(':')[0] : 0}
          onValueChange={(data) => setTimeHour(data)}
          wrapperHeight={180}
          wrapperWidth={150}
          wrapperColor={warpperColor}
          itemHeight={60}
          highlightColor='#d8d8d8'
          highlightBorderWidth={2}
        />
       </View>
       <Text style={{position: 'absolute',left: 76, top: 65, fontSize: 28,zIndex: 2, color: color}}>:</Text>
       <View style={{width:80 ,height: 200}}>
          <ScrollPicker
            dataSource={minuteData}
            renderItem={(data, index, isSelected) => (
              <Text style={isSelected && { color: color }}>{data}</Text>
            )}
            selectedIndex={timestartEdit ? timestartEdit.split(':')[1] : 0}
            onValueChange={(data) => setTimeMinute(data)}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperColor={warpperColor}
            itemHeight={60}
            highlightColor='#d8d8d8'
            highlightBorderWidth={2}
          />
        </View>
    </View>
  );
}