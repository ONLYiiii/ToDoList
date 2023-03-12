import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { hourData, minuteData, checkTimeSelected } from '../utils/timeScrollPicker';

// eslint-disable-next-line react/prop-types
export default function ScrollTimePicker({mode, color, warpperColor, handlerCreateActivity}) {
  const [timeValue, setTimeValue] = useState({
    hour: "00",
    minute: "00"
  });

  const handlerTimeSelectHour = (value) => {
    setTimeValue(prevState => {
      return { ...prevState, hour: value}
    });
  };

  const handlerTimeSelectMinute = (value) => {
    setTimeValue(prevState => {
      return { ...prevState, minute: value}
    });
  };
  useEffect(() => {
    mode == "timestart" ?
      handlerCreateActivity("timestart", `${timeValue.hour}:${timeValue.minute}`)
    : 
      handlerCreateActivity("howlong", `${(Number(timeValue.hour) * 60) + Number(timeValue.minute)}`)
  }, [timeValue])
  

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
          onValueChange={(data, selectedIndex) => handlerTimeSelectHour(data)}
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
            onValueChange={(data, selectedIndex) => handlerTimeSelectMinute(data)}
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

const styles = StyleSheet.create({
});