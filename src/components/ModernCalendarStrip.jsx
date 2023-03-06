import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const ModernCalendarStrip = () => {
  
  return (
    <View style={{ width: '100%'}}>
    <CalendarStrip
      scrollable={true}
      daySelectionAnimation={{
        type: 'border',
        duration: 200,
        borderWidth: 1,
        borderHighlightColor: '#666AF6'
      }}
      style={{height:70, paddingBottom: 10}}
      highlightDateNameStyle={{color: '#666AF6', fontSize: 16}}
      highlightDateNumberStyle={{color: '#666AF6'}}
      disabledDateNameStyle={{color: 'grey'}}
      disabledDateNumberStyle={{color: 'grey'}}
      dateNameStyle={{fontSize: 16}}
      dateNumberStyle={{fontSize: 16}}
      dayContainerStyle={{width: 55, height: 55}}
      styleWeekend={true}
      weekendDateNumberStyle={{color:'red', backgroundColor: 'red'}}
    />
  </View>
  );
}

export default ModernCalendarStrip