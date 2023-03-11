/* eslint-disable react/prop-types */
import { useEffect, useState} from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal, Pressable} from 'react-native';
import { Button, View, ScrollView, ZStack, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SvgXml } from 'react-native-svg';
import { useData} from '../hooks';
import {Calendar,ScrollTimePicker} from '../components';

const CreateScreen = ({ route }) => {
  const navigation = useNavigation()
  const {createModalVisiable} = route.params;
  const {textActivity} = route.params;
  // const {iconSelected} = route.params
  const [modalVisible, setModalVisible] = useState(createModalVisiable);
  const [selectHowlong,setSelectHowlong] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false)
  const [modalPicTime,setmodalPicTime] = useState(false);
  const {newIconActivitySelected, newDate, addActivity}= useData()
  const timeHowlong = [1,15,30,45,60,90]
  const [activityData, setActivityData] = useState({
    name: textActivity,
    timestart: "",
    dateAt: newDate.fullDate,
    howlong: 0,
    icon: newIconActivitySelected,
  })

  function onShowCalenderChange() {
    setShowCalendar(false)
  }

  function handlerCreateActivity(inputIdentifier, enteredValue) {
    setActivityData((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
    }})
  }

  function handleSubmitCreateActivity() {
    addActivity(activityData)
  }

  // useEffect(()=> {
  //   console.log(activityData)
  // }, [activityData])

  return (
    <>
      <Modal animationType='fade' transparent={false} visible={modalVisible}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            height: 'auto',
          }}
        >
          
        <View style={styles.title}>
          <Text style ={{fontFamily:'Sarabun-Medium',fontSize: 25 }}>
            สร้าง<Text style ={{color:'#878AF5',fontSize: 25}}>งาน</Text>
          </Text>
          <TouchableOpacity 
            onPress={() => {
              setModalVisible(false)
              navigation.navigate('HomeScreen')
            }} 
            style={{padding: 5}}
          >
              <MaterialCommunityIcons name="close-circle" size={30} color="#aaa"/>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          width: '80%',
          marginTop: 30,
        }}>
          <View style={styles.BoxFocus}>
            <SvgXml fill={'#878AF5'} width={34} height={34} xml={newIconActivitySelected.iconActivitySelected} /> 
          </View>
          <View w={'80%'} paddingY={2} borderBottomWidth={3} borderBottomColor={'gray.300'}>
            <Text
              mt={2}
              color={'gray.800'}
              style={{fontSize: 20, fontFamily: 'Sarabun-Regular'}}
            >{textActivity}</Text>   
          </View>
        </View>
      
        <View w={'80%'} style={[styles.textStartAcitity, {marginTop: 24}]}>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>เมื่อไหร่</Text>
        </View>

        <Text style={{
          marginTop: 20,
          fontSize: 16,
          fontFamily:'Sarabun-Regular',
          textAlign: 'center'
        }}>
          ชั่วโมง : นาที
        </Text>

        <ScrollTimePicker
          warpperColor={'#fff'}
          inputChangeHandler={handlerCreateActivity}
        />

        <TouchableOpacity
          onPress={() => setShowCalendar(true)}
          style={{
            flexDirection: 'row',
            width: 150,
            paddingVertical: 3,
            backgroundColor: '#eee',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e1e1e1'
          }}
        >
          <View>
            <MaterialCommunityIcons 
              name="calendar-multiselect"
              size={36}
              color="#666AF6"
              style={{marginRight: 12}}
            />
          </View>
          <View>
            <Text style={{fontFamily: 'Sarabun-Medium'}}>{`${newDate.day}/${newDate.monthNum}/${newDate.year}`}</Text>
          </View>
        </TouchableOpacity>
        {/* Modal Calendar */}
        {showCalendar && <Calendar showCalendar={showCalendar}  onShowCalenderChange={onShowCalenderChange} />}

        <View w={'80%'} style={[styles.textStartAcitity, {marginTop: 30}]}>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>นานเเค่ไหน?</Text>
          <TouchableOpacity onPress = {() => {setmodalPicTime(true)}} >
            <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>ระบุเอง...</Text>
          </TouchableOpacity>
        </View>
        
        <ZStack mt={4} alignItems="center" justifyContent="center" style={{height: 50}}>
          <Box
            w={'90%'}
            bgColor={'#878AF550'}
            rounded="lg" alignItems={'center'}
            justifyContent="center"
            style={{height: 50}}
          >
            <Box
              w={'98%'}
              bgColor={'#878AF570'}
              rounded="lg"
              alignItems={'center'}
              flexDirection={'row'}
              style={{height: 36, justifyContent: 'space-evenly'}}
            >
              {timeHowlong.map((item, index) => 
                <Button
                  key={index}
                  onPress={() => {
                    setSelectHowlong(item)
                    handlerCreateActivity("howlong", item)
                  }}
                  bgColor={ selectHowlong==item ? '#676BFA' : 'transparent'}
                  p={0}
                  w={10}
                >
                  <Text style={{fontSize: 16, fontFamily: 'Sarabun-SemiBold', color: '#fff'}}>{item}</Text>
                </Button>
              )}
            </Box>
          </Box>
        </ZStack>

        <Box w={'80%'} bgColor={'#F1F1F1'} alignSelf={'center'} style={styles.BoxNote}>
          <View flexDirection={'row'} bgColor={'#666AF6'} style={styles.NoteTitle}>
            <MaterialCommunityIcons name="plus-circle" size={24} color="#fff" />
            <Text style={{
              fontFamily:'Sarabun-Bold',
              fontSize: 18,
              color:'#fff',
              marginLeft: 15
            }}>
              เพิ่มงานย่อย
            </Text>
          </View>
          <Text style={{
            marginLeft: 15,
            marginTop: 10,
            fontFamily:'Sarabun-Regular',
            color: '#727272'
          }}>
            เพิ่มโน๊ต ลิ้งค์การประชุม หรือ เบอร์โทรศัพท์..
          </Text>
        </Box>
        <TouchableOpacity
          style={styles.CreatelastButton}
          onPress={() => {handleSubmitCreateActivity()
            navigation.replace('HomeScreen')
          }}
        >
          <Text style={{ 
            alignSelf: 'center',
            marginTop: 5,
            color: '#ffffff',
            fontFamily: 'Sarabun-Regular',
            fontSize: 30 }}
          >สร้างงาน</Text>
        </TouchableOpacity>
        </ScrollView>
      </Modal>
      
      <Modal animationType='fade' transparent={true} visible={modalPicTime} >
          <Pressable style={{alignItems: 'center',justifyContent: 'center',flex:1,}} onPress = {() => setmodalPicTime(false)}>
            {/* <TouchableWithoutFeedback> */}
              <View style ={{ 
                width: '75%',
                height: 'auto',
                backgroundColor: '#878AF5',
                borderRadius:10
              }}>
                <Text style={{
                  margin: 10,
                  fontSize: 15,
                  fontFamily:'Sarabun-Medium',
                  color: '#ffffff'
                }}>ระบุเวลาทำกิจกรรม</Text>
                <Text style ={{
                  alignSelf: 'center',
                  fontSize: 13,
                  fontFamily:'Sarabun-Medium',
                  color: '#ffffff85',
                  }}>ชั่วโมง : นาที</Text>
                <View style={{
                  width: '30%', 
                  height: '15%',
                  backgroundColor: '#F4863C',
                  borderRadius: 10,
                  alignSelf: 'flex-end',
                  marginTop: 70,
                  marginHorizontal: 10,
                  justifyContent: 'center'
                }}>
                  <ScrollTimePicker warpperColor={'#878AF5'} />
                  <Text style={{
                    alignSelf: 'center',
                    fontFamily:'Sarabun-Medium',
                    color: '#F9F9F9'
                  }}>เสร็จสิ้น</Text>
                </View>
              </View>
            {/* </TouchableWithoutFeedback> */}
          </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  BoxFocus: {
    marginRight: 20,
    padding: 12,
    backgroundColor: '#F1F1F1',
    shadowColor: '#000000',
    elevation: 3,
    borderRadius: 10
  },
  textStartAcitity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  BoxNote: {
    height: 200,
    marginVertical: 45,
    borderRadius: 15
  },
  NoteTitle: {
    height: 40,
    paddingLeft: 15,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  CreatelastButton: {
    width: '85%',
    height: 65,
    backgroundColor: "#666AF6",
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 26,
    borderRadius: 20,
  },
});

export default CreateScreen;