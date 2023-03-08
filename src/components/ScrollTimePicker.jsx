import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimePicker from '../components/ScrollTimePicker/index';
import { useMemo } from 'react';

const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

export default function ScrollTimePicker() {
  const [timeValue, setTimeValue] = useState(Date.now() % MILLISECONDS_PER_DAY);
  const [hour, min] = useMemo(() => {
    return [
      Math.floor(timeValue / MILLISECONDS_PER_HOUR),
      Math.floor((timeValue % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE),
      Math.floor((timeValue % MILLISECONDS_PER_MINUTE) / 1000),
    ];
  }, [timeValue]);
  return (
    <View style={styles.container}>
      <TimePicker
        value={timeValue}
        wheelProps={{
          wheelHeight: 200,
          itemHeight: 28,
        }}
        textStyle={{fontSize: 20, fontFamily: 'Sarabun-SemiBold'}}
        textCenterStyle={{fontSize: 25, fontFamily: 'Sarabun-Medium', paddingTop: 6}}
        onChange={(newValue) => setTimeValue(newValue)}
      />
      {/* <Text style={styles.timeValue}>{`${hour < 10 ? '0' : ''}${hour}:${
        min < 10 ? '0' : ''
      }${min}`}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // timeValue: {
  //   marginVertical: 20,
  // },
});