/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-unused-styles */
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { Button,Input } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useData } from '../hooks';

// eslint-disable-next-line react/prop-types
const CreateAcitivityTest = ({ route }) => {
  const navigation = useNavigation()
  const {ModalVisiable} = route.params
  const [modalVisible, setModalVisible] = useState(false);
  const {addExpense,deleteExpense,updateExpense} = useData()

  const [name, setName] = useState("");
  const [timestart, setTimeStart] = useState("");
  const [dateat, setDateAt] = useState("");
  const [howlong, setHowLong] = useState("");
  // console.log(name,timestart,dateat,howlong)

  const handleChangeName = text => setName(text);
  const handleChangeTimeStart = text => setTimeStart(text);
  const handleChangeDateAt = text => setDateAt(text);
  const handleChangeHowLong = text => setHowLong(text);
  
  function confirmHandle() {
    addExpense({
      name: name,
      timestart: timestart,
      dateAt: dateat,
      howlong: howlong
    })
    navigation.replace('HomeScreen')
  }

  
  useEffect(() => {
    setModalVisible(ModalVisiable)
  }, [])

  return (
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
      <Text>ชื่อกิจกรรม</Text>
      <Input size="sm" placeholder="ชื่อกิจกรรม" onChangeText={handleChangeName} />
      <Text>เวลาเริ่มกิจกรรม</Text>
      <Input size="sm" placeholder="เวลาเริ่มกิจกรรม" onChangeText={handleChangeTimeStart} />
      <Text>วันที่</Text>
      <Input size="sm" placeholder="วันที่" onChangeText={handleChangeDateAt} />
      <Text>นานแค่ไหน</Text>
      <Input size="sm" placeholder="นานแค่ไหน" onChangeText={handleChangeHowLong} />
      <Button mt={5} w={'80%'} alignSelf={'center'} onPress={() => confirmHandle()}>สร้าง</Button>
    </Modal>
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
    marginBottom: 10,
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
  }
});

export default CreateAcitivityTest;