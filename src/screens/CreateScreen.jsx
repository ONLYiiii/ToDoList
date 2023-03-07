/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-unused-styles */
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { Box } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ScrollTimePicker from '../components/ScrollTimePicker';

// eslint-disable-next-line react/prop-types
const CreateScreen = ({ route }) => {
  const navigation = useNavigation()
  const {createModalVisiable} = route.params
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  
  useEffect(() => {
    setModalVisible(createModalVisiable)
  }, [])

  return (
    <View>
      <Modal animationType='slide' transparent={false} visible={modalVisible}>

      <View style={styles.title}>
        <Text style ={{fontFamily:'Sarabun-Medium',fontSize: 25 }}>
          สร้าง<Text style ={{color:'#878AF5',fontSize: 25}}>งาน</Text>
        </Text>
        <TouchableOpacity 
            onPress={() => {
              setModalVisible(false)
              navigation.replace('HomeScreen')
            }} 
            style={styles.closeButton} >
            <AntDesign name="close" size={20} color="white"/>
        </TouchableOpacity>
      </View>

      <Text style={{
        padding: 15,
        marginLeft: 20,
        fontSize: 18,
        fontFamily:'Sarabun-Regular',
        color: '#747474',
      }}>
        ทำอะไร?
      </Text>

      <View style={{marginLeft: 40,flexDirection: 'row'}}>
          <View style={styles.BoxFocus}>
              <FontAwesome5 name="shopping-cart" size={28} color="#878AF5"/>
          </View>
          <Text style={{fontFamily:'Sarabun-Regular', fontSize:18,color:'#747474',marginTop: 5}}>ช้อปปิ้ง</Text>     
      </View>
      <View style={{ height: 2, backgroundColor: '#dbdbdb',width:250,alignSelf: 'flex-end',marginRight:30}}/>

      <View style={[styles.block,{marginTop: 20,flexDirection: 'row'}]}>
          <MaterialCommunityIcons name="silverware-fork-knife" size={30} color="#F4863C" style={{marginTop:20,marginLeft:20}} />
          <View style={{marginLeft: 30,marginTop: 18}}>
              <Text style={{fontSize: 10,color:'#747474'}}>12:00-12:40 (40 นาที)</Text>
              <Text style={{fontSize: 15 ,marginTop: 5}}>ทานอาหารเที่ยง</Text>
          </View>
      </View>
      <View style={[styles.block,{marginTop: 20,flexDirection: 'row'}]}>
          <FontAwesome5 name="shopping-cart" size={25} color="#F4863C" style={{marginTop:25,marginLeft:20}}/>
          <View style={{marginLeft: 30,marginTop: 18}}>
              <Text style={{fontSize: 10,color:'#747474'}}>14:15-15:10 (1 ชั่วโมง 05 นาที)</Text>
              <Text style={{fontSize: 15,marginTop: 5 }}>ช้อปปิ้ง</Text>
          </View>
      </View>
      <View style={[styles.block,{marginTop: 20,flexDirection: 'row'}]}>
          <MaterialCommunityIcons name="run" size={35} color="#F4863C" style={{marginTop:20,marginLeft:20}} />
          <View style={{marginLeft: 30,marginTop: 18}}>
              <Text style={{fontSize: 10,color:'#747474'}}>17:20-18:05 (45 นาที)</Text>
              <Text style={{fontSize: 15,marginTop: 5 }}>ออกไปวิ่ง</Text>
          </View>
      </View> 
      <View style={[styles.block,{marginTop: 20,flexDirection: 'row'}]}>
          <FontAwesome5 name="tv" size={24} color="#F4863C" style={{marginTop:25,marginLeft:20}} />
          <View style={{marginLeft: 30,marginTop: 18}}>
              <Text style={{fontSize: 10,color:'#747474'}}>23:00-00:45 (1 ชั่วโมง 45 นาที)</Text>
              <Text style={{fontSize: 15,marginTop: 5 }}>ดูหนัง</Text>
          </View>
      </View> 
      <TouchableOpacity style={styles.CreatelastButton} onPress={() => {
        setModal2Visible(true)
        setModalVisible(false)
      }}>
          <Text style={{alignSelf: 'center', marginTop: 8, color: '#ffffff',fontFamily:'Sarabun-Regular',fontSize: 30}}>สร้างงาน</Text>
      </TouchableOpacity>
      </Modal>

      <Modal animationType='fade' transparent={false} visible={modal2Visible}>
        <View style={styles.title}>
          <Text style ={{fontFamily:'Sarabun-Medium',fontSize: 25 }}>
            สร้าง<Text style ={{color:'#878AF5',fontSize: 25}}>งาน</Text>
          </Text>
          <TouchableOpacity 
              onPress={() => {
                setModalVisible(false)
                navigation.replace('HomeScreen')
              }} 
              style={styles.closeButton} >
              <AntDesign name="close" size={20} color="white"/>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 40,flexDirection: 'row',marginTop: 15}}>
          <View style={styles.BoxFocus}>
            <FontAwesome5 name="shopping-cart" size={28} color="#878AF5"/>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontFamily:'Sarabun-Regular', fontSize:18,color:'#747474',marginTop: 5}}>ช้อปปิ้ง</Text>     
            <View style={{ height: 2, backgroundColor: '#dbdbdb',width:250,alignSelf: 'flex-end',marginRight:30}}/>
          </View>  
        </View>
        <View style ={styles.textStartAcitity}>
          <Text style={{fontSize: 15}}>เมื่อไหร่</Text>
          <Text style={{fontSize: 15}}>มากกว่า</Text>
        </View>
        <View style={{
          position: 'absolute',
          marginTop: 190,
          alignSelf: 'center'
        }}>
          <ScrollTimePicker />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffdfe',
    flex: 1,
  },
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
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: "#999",
    justifyContent: 'center',
    alignItems: 'center'
  },
  BoxFocus: {
    marginRight: 20,
    padding: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    elevation: 20,
    borderRadius: 10
  },
  block: {
    width: '85%',
    height: 75,
    alignSelf: 'center',
    backgroundColor: "#f8f8f8",
    borderRadius: 20
  },
  CreatelastButton: {
    width: '85%',
    height: 65,
    backgroundColor: "#666AF6",
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  textStartAcitity: {
    width: '80%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
});

export default CreateScreen;