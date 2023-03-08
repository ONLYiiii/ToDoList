/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-unused-styles */
// import { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { Input, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Background from './Background';

// eslint-disable-next-line react/prop-types
const CreateAcitivitySelectIcon = ({ ModalVisiable, onShowSelectIcon  }) => {
  const navigation = useNavigation()

  return (
    <Background>
      <Modal animationType='slide' transparent={false} visible={ModalVisiable}>

      <View style={styles.title}>
        <Text style ={{fontFamily:'Sarabun-Medium',fontSize: 25 }}>
          สร้าง<Text style ={{color:'#878AF5',fontSize: 25}}>งาน</Text>
        </Text>
        <TouchableOpacity 
          onPress={() => {
            onShowSelectIcon(false)
            navigation.replace('HomeScreen')
          }} 
          style={styles.closeButton}
        >
          <AntDesign name="close" size={20} color="white"/>
        </TouchableOpacity>
      </View>

      <Text style={{
        padding: 15,
        marginLeft: 20,
        fontSize: 18,
        fontFamily:'Sarabun-Medium',
        color: '#747474',
      }}>
        ทำอะไร?
      </Text>

      <View style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          width: '80%'
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

      <TouchableOpacity style={styles.CreatelastButton} onPress={() => {
        onShowSelectIcon(false)
        navigation.replace('CreateScreen', {
          createModalVisiable: true
        })
      }}>
          <Text style={{alignSelf: 'center', marginTop: 8, color: '#ffffff',fontFamily:'Sarabun-Regular',fontSize: 30}}>สร้างงาน</Text>
      </TouchableOpacity>
      </Modal>
    </Background>
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
  CreatelastButton: {
    width: '85%',
    height: 65,
    backgroundColor: "#666AF6",
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
});

export default CreateAcitivitySelectIcon;