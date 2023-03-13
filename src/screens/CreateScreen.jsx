/* eslint-disable react/prop-types */
import { useState} from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal, Alert} from 'react-native';
import { Button, View, ZStack, Box, TextArea } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';

import { toHoursAndMinutes, checkTimeSelected } from '../utils/date';
import { useData} from '../hooks';
import {DateTimePicker,ScrollTimePicker, Background} from '../components';

const CreateScreen = ({ route }) => {
  const navigation = useNavigation()
  const {isEditing} = route.params
  const {selectedActivity} = route.params
  const {textIconActivity} = route.params
  const {iconSelected} = route.params
  const {newDate, addActivity, updateActivity}= useData()
  const [showCalendar, setShowCalendar] = useState(false)
  const [modalPicTime,setmodalPicTime] = useState(false);
  const [activityData, setActivityData] = useState({
    name: isEditing ? selectedActivity.name : textIconActivity,
    timestart: isEditing ? selectedActivity.timestart : "",
    dateAt: isEditing ? selectedActivity.dateAt : newDate.fullDate,
    howlong: isEditing ? selectedActivity.howlong : 0,
    icon: isEditing ? selectedActivity.icon : iconSelected,
    comment: isEditing ? selectedActivity.comment : "- เดินเล่น",
  })

  function handlerCreateActivity(inputIdentifier, enteredValue) {
    setActivityData((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
    }})
  }

  function handleSubmitCreateActivity() {
    if (checkTimeSelected(activityData.timestart) == true) {
      console.log("create!!", checkTimeSelected(activityData.timestart))
      if (isEditing) {
        updateActivity(selectedActivity.id,activityData)
      } else {
        addActivity(activityData)
      }
      navigation.replace('HomeScreen')
    } else { 
      Alert.alert('แจ้งเตือน', 'กรุณาใส่เวลาเริ่มทำกิจกรรมให้มากกว่าเวลาปัจจบุัน', [{text: 'OK'},])
    }
    // addActivity(activityData)
  }

  // useEffect(()=> {
  //   console.log(activityData)
  // }, [activityData])

  return (
    <>
      <Background isScrollView={true}>
          
        <View style={styles.title}>
          {isEditing ? <Text style ={{fontFamily:'Sarabun-Medium',fontSize: 25 }}>
            แก้<Text style ={{color:'#878AF5',fontSize: 25}}>งาน</Text>
          </Text> 
          : <Text style ={{fontFamily:'Sarabun-Medium',fontSize: 25 }}>
            สร้าง<Text style ={{color:'#878AF5',fontSize: 25}}>งาน</Text>
          </Text>
          }
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
            <SvgXml fill={'#878AF5'} width={34} height={34} xml={iconSelected} /> 
          </View>
          <View w={'80%'} paddingY={2} borderBottomWidth={3} borderBottomColor={'gray.300'}>
            <Text
              mt={2}
              color={'gray.800'}
              style={{fontSize: 20, fontFamily: 'Sarabun-Regular'}}
            >{textIconActivity}</Text>   
          </View>
        </View>
      
        <View w={'80%'} style={[styles.textStartAcitity, {marginTop: 24}]}>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>เวลาเริ่มกิจกรรม</Text>
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
          timestartEdit={isEditing && selectedActivity.timestart}
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
            <Text style={{fontFamily: 'Sarabun-Medium'}}>{isEditing ? `${selectedActivity.dateAt.split('-')[2]}/${selectedActivity.dateAt.split('-')[1]}/${selectedActivity.dateAt.split('-')[0]}` :  `${newDate.day}/${newDate.monthNum}/${newDate.year}`}</Text>
          </View>
        </Button>
        {/* Modal Calendar */}
        <DateTimePicker mode={"date"} showCalendar={showCalendar} setShowCalendar={setShowCalendar} editActivity={isEditing && selectedActivity.dateAt} />

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
          <TextArea 
            w="100%"
            // maxW="300"
            h={'80%'}
            value={activityData.comment}
            onChangeText={(text) => handlerCreateActivity("comment", text)}
            borderWidth={0}
            fontSize={16}
            fontFamily={'Sarabun-Regular'}
            placeholder="เพิ่มโน๊ต ลิ้งค์การประชุม หรือ เบอร์โทรศัพท์.." 
            style={{
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15
            }}
          />
        </Box>

        <Button
          backgroundColor={'#666AF6'}
          _pressed={{backgroundColor: '#878AF5'}}
          p={0}
          style={styles.CreatelastButton}
          onPress={ () => {
            (activityData.timestart == "" || activityData.howlong) == 0 ?
            Alert.alert('แจ้งเตือน', 'กรุณาใส่ข้อมูลให้ครบถ้วน', [
              {text: 'OK'},
            ]) : handleSubmitCreateActivity()
          }}
        >
          <Text style={{ 
            textAlign: 'center',
            color: '#ffffff',
            fontFamily: 'Sarabun-Regular',
            fontSize: 30 }}
          >{isEditing ? "แก้งาน" : "สร้างงาน"}</Text>
        </Button>
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
    borderRadius: 15,
    flexWrap: 'nowrap'
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