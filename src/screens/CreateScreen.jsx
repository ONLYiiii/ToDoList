/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-unused-styles */
import { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { Input, View } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ScrollTimePicker from '../components/ScrollTimePicker';

// eslint-disable-next-line react/prop-types
const CreateScreen = ({ route }) => {
  const navigation = useNavigation()
  const {createModalVisiable} = route.params
  const [modalVisible, setModalVisible] = useState(createModalVisiable);

  return (
    <View>
      <Modal animationType='fade' transparent={false} visible={modalVisible}>
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
    padding: 12,
    backgroundColor: '#F1F1F1',
    shadowColor: '#000000',
    elevation: 3,
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