import { View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { useData } from '../hooks';

const ModernCalendarStrip = () => {
  const {newDate} = useData()
  
  return (
    <View style={{ width: '100%'}}>
    <CalendarStrip
      scrollable={true}
      daySelectionAnimation={{
        type: 'background',
        borderWidth: 1,
        // borderHighlightColor: '#666AF6',
        highlightColor: '#F29D38'
      }}
      style={{height:72, paddingBottom: 10}}
      highlightDateNameStyle={{color: '#fff', fontSize: 12}}
      highlightDateNumberStyle={{color: '#fff'}}
      dateNameStyle={{fontSize: 14}}
      dateNumberStyle={{fontSize: 16}}
      dayContainerStyle={{width: 50, height: 48}}
      startingDate={newDate.fullDate}
      onDateSelected={(date) => console.log("date strip", date)}
      headerText={" "}
      calendarAnimation={{
        type: 'parallel',
        duration: 100
      }}
    />
  </View>
  );
}

export default ModernCalendarStrip