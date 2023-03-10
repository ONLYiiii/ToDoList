/* eslint-disable react/prop-types */
import { useState} from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { Input, View, ScrollView, ZStack, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ScrollTimePicker } from '../components';

const CreateScreen = ({ route }) => {
  const navigation = useNavigation()
  const {createModalVisiable} = route.params
  const [modalVisible, setModalVisible] = useState(createModalVisiable);

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
              navigation.replace('HomeScreen')
            }} 
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
            <MaterialCommunityIcons name="cart" size={32} color="#878AF5"/>
          </View>
          <View w={'80%'}>
            <Input
              variant="underlined"
              placeholder="ข้อความ"
              placeholderTextColor={'gray.500'}
              mt={2}
              color={'gray.800'}
              type={'text'}
              borderBottomWidth={3}
              fontSize={16}
              focusOutlineColor={'blue.500'}
              _focus={{borderBottomWidth: 3}}
            />   
          </View>
        </View>
      
        <View w={'80%'} style={[styles.textStartAcitity, {marginTop: 24}]}>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>เมื่อไหร่</Text>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>มากกว่า</Text>
        </View>

        <Text style={{
          marginTop: 20,
          fontSize: 16,
          fontFamily:'Sarabun-Regular',
          textAlign: 'center'
        }}>
          ชั่วโมง : นาที
        </Text>

        <View style={{
          alignSelf: 'center'
        }}>
          {/* <ScrollTimePicker/> */}
        </View>

        <View w={'80%'} style={[styles.textStartAcitity, {marginTop: 35}]}>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>นานเเค่ไหน?</Text>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>ระบุเอง...</Text>
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
              w={'95%'}
              bgColor={'#878AF570'}
              rounded="lg"
              alignItems={'center'}
              style={{height: 34}}
            >
              {/* เดะตรงนี้ทำให้ ข้ามไปตรงอื่นก่อน */}
              <Text style={{fontSize: 18, fontFamily: 'Sarabun-SemiBold', color: '#fff', letterSpacing: 16}}>1 2 3 4 5 6</Text>
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
        </ScrollView>
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
  }
});

export default CreateScreen;