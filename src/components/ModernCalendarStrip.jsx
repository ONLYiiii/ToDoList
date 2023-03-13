import { View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
// import { getFormatDate } from '../utils/date';
import { useData } from '../hooks';

const ModernCalendarStrip = () => {
  const {dateStripSelect, setDateStripSelect} = useData()
  
  return (
    <View style={{ width: '100%'}}>
      <CalendarStrip
        scrollable={true}
        daySelectionAnimation={{
          type: 'background',
          borderWidth: 1,
          // borderHighlightColor: '#666AF6',
          highlightColor: '#31446C'
        }}
        style={{marginTop: 5,height:100, paddingBottom: 10}}
        highlightDateNameStyle={{color: '#fff', fontSize: 12}}
        highlightDateNumberStyle={{color: '#fff'}}
        dateNameStyle={{fontSize: 14}}
        dateNumberStyle={{fontSize: 16}}
        dayContainerStyle={{width: 50, height: 48}}
        // startingDate={dateStripSelect.dateStrip}
        selectedDate={dateStripSelect.dateStrip}
        onDateSelected={(date) => setDateStripSelect({dateStrip: date.format("YYYY-MM-DD")})}
        calendarHeaderContainerStyle={{
          width: 180,
          height: 50,
          marginLeft: 10,
          marginBottom: 10,
          // backgroundColor: 'red',
          alignSelf: 'flex-start'
        }}
        calendarHeaderStyle={{
          fontSize: 30
        }}
        // headerText={" "}
        calendarAnimation={{
          type: 'parallel',
          duration: 100
        }}
      />
    </View>
  );
}

export default ModernCalendarStrip