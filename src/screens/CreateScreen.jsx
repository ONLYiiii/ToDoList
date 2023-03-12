/* eslint-disable react/prop-types */
import { useState} from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal, Alert} from 'react-native';
import { Button, View, ZStack, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';

import { toHoursAndMinutes } from '../utils/date';
import { useData} from '../hooks';
import {DateTimePicker,ScrollTimePicker, Background} from '../components';

const CreateScreen = ({ route }) => {
  const navigation = useNavigation()
  const {textActivity} = route.params;
  const {newIconActivitySelected, newDate, addActivity}= useData()
  const [selectHowlong,setSelectHowlong] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false)
  const [modalPicTime,setmodalPicTime] = useState(false);
  const [activityData, setActivityData] = useState({
    name: textActivity,
    timestart: "",
    dateAt: newDate.fullDate,
    howlong: 0,
    icon: newIconActivitySelected.iconActivitySelected,
  })

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
      <Background isScrollView={true}>
        {/* <ScrollView 
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            height: 'auto',
          }}
        > */}
          
        <View style={styles.title}>
          <Text style ={{fontFamily:'Sarabun-Medium',fontSize: 25 }}>
            สร้าง<Text style ={{color:'#878AF5',fontSize: 25}}>งาน</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
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
          mode={'timestart'}
          color={'#666AF6'}
          warpperColor={'#fff'}
          handlerCreateActivity={handlerCreateActivity}
        />

        <Button
          onPress={() => setShowCalendar(true)}
          p={0}
          style={{
            width: 150,
            paddingVertical: 3,
            backgroundColor: '#eee',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#e1e1e1'
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons 
              name="calendar-multiselect"
              size={36}
              color="#666AF6"
              style={{marginRight: 10}}
            />
            <Text style={{fontFamily: 'Sarabun-Medium'}}>{`${newDate.day}/${newDate.monthNum}/${newDate.year}`}</Text>
          </View>
        </Button>
        {/* Modal Calendar */}
        {showCalendar && <DateTimePicker mode={"date"} showCalendar={showCalendar} setShowCalendar={setShowCalendar} />}

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
              {/* {activityData.howlong == 0 ? ([1,15,30,45,60,90].map((item, index) => 
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
                  <Text style={{fontSize: 16, fontFamily: 'Sarabun-SemiBold', color: '#fff'}}>{`${item} นาที`}</Text>
                  <Text style={{fontSize: 16, fontFamily: 'Sarabun-SemiBold', color: '#fff'}}>{item}</Text>
                </Button>
                )) 
              : <Text style={{fontSize: 16, fontFamily: 'Sarabun-SemiBold', color: '#fff'}}>
                  {toHoursAndMinutes(activityData.howlong)}
                </Text>
              } */}
              <Text style={{fontSize: 16, fontFamily: 'Sarabun-SemiBold', color: '#fff'}}>
                {toHoursAndMinutes(activityData.howlong)}
              </Text>
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

        <Button
          backgroundColor={'#666AF6'}
          _pressed={{backgroundColor: '#878AF5'}}
          p={0}
          style={styles.CreatelastButton}
          onPress={(activityData.timestart == "" || activityData.howlong == 0) ? () =>
          Alert.alert('แจ้งเตือน', 'กรุณาใส่ข้อมูลให้ครบถ้วน', [
            {text: 'OK'},
          ]) : () => {
              handleSubmitCreateActivity()
              navigation.replace('HomeScreen')
          }}
        >
          <Text style={{ 
            textAlign: 'center',
            color: '#ffffff',
            fontFamily: 'Sarabun-Regular',
            fontSize: 30 }}
          >สร้างงาน</Text>
        </Button>
        {/* </ScrollView> */}
      </Background>
      
      <Modal animationType='fade' transparent={true} visible={modalPicTime} >
          <Box style={{alignItems: 'center',justifyContent: 'center',flex:1,}}>
              <View style ={{ 
                width: '75%',
                height: 'auto',
                backgroundColor: '#878AF5',
                borderRadius:10
              }}>
                <Text style={{
                  marginVertical: 10,
                  marginLeft: 15,
                  fontSize: 16,
                  fontFamily:'Sarabun-Medium',
                  color: '#ffffff'
                }}>ระบุเวลาทำกิจกรรม</Text>
                <Text style ={{
                  alignSelf: 'center',
                  fontSize: 13,
                  fontFamily:'Sarabun-Medium',
                  color: '#F3F3F3',
                  }}>ชั่วโมง : นาที</Text>
                <View style={{
                  width: 'auto', 
                  height: 'auto',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginBottom: 10
                }}>
                  <ScrollTimePicker 
                    mode={'howlong'}
                    color={'#f39e65'}
                    warpperColor={'#878AF5'}
                    handlerCreateActivity={handlerCreateActivity}
                  />
                  <Button 
                    bgColor={'#F4863C'}
                    _pressed={{backgroundColor: '#f39e65'}}
                    onPress={() => setmodalPicTime(false)}
                    style={{
                      alignSelf: 'center',
                      fontFamily:'Sarabun-Medium',
                      color: '#F9F9F9'
                    }}
                  >เสร็จสิ้น</Button>
                </View>
              </View>
          </Box>
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
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 26,
    borderRadius: 20,
  },
});

export default CreateScreen;