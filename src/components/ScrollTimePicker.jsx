import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { getTimeHours, getTimeMins } from '../utils/timeScrollPicker';

// eslint-disable-next-line react/prop-types
export default function ScrollTimePicker({warpperColor, inputChangeHandler}) {
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
    inputChangeHandler("timestart", `${timeValue.hour}:${timeValue.minute}`)
  }, [timeValue])
  

  return (
    <View style={{
      alignSelf: 'center',
      flexDirection: 'row'
    }}>
      <View style={{width:80 ,height: 150}}>
        <ScrollPicker
          dataSource={getTimeHours()}
          renderItem={(data, index, isSelected) => (
            <Text style={isSelected && { color: '#666AF0' }}>{data}</Text>
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
       <Text style={{position: 'absolute',left: 76, top: 65, fontSize: 28,zIndex: 2, color: '#666AF0'}}>:</Text>
       <View style={{width:80 ,height: 200}}>
          <ScrollPicker
            dataSource={getTimeMins()}
            renderItem={(data, index, isSelected) => (
              <Text style={isSelected && { color: '#666AF0' }}>{data}</Text>
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