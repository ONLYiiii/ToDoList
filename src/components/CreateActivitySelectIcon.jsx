import { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Input, View, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import Background from './Background';
import { useData } from '../hooks';
// import consolecontroller from '../assets/icons/moon.svg'


// eslint-disable-next-line react/prop-types
const CreateActivitySelectIcon = ({ ModalVisiable, setShowSelectIcon }) => {
  const navigation = useNavigation()
  const { iconActivity, newIconActivitySelected, setIconActivitySelected } = useData()
  const [selectIconPlus, setSelectIconPlus] = useState(false)
  const [textActivity,setTextActivity] = useState("")

  return (
    <Background>
      <Modal animationType='slide' transparent={false} visible={ModalVisiable}>

        <View style={styles.title}>
          <Text style={{ fontFamily: 'Sarabun-Medium', fontSize: 25 }}>
            สร้าง<Text style={{ color: '#878AF5', fontSize: 25 }}>งาน</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowSelectIcon(false)
            }}
            style={{padding: 5}}
          >
            <MaterialCommunityIcons name="close-circle" size={30} color="#aaa" />
          </TouchableOpacity>
        </View>

        <Text style={{
          padding: 15,
          marginLeft: 20,
          fontSize: 18,
          fontFamily: 'Sarabun-Medium',
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
            <SvgXml fill={'#878AF5'} width={34} height={34} xml={newIconActivitySelected.iconActivitySelected} /> 
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
              _focus={{ borderBottomWidth: 3 }}
              value={textActivity}
              onChangeText={(text) => setTextActivity(text)}
            />
          </View>
        </View>

        <View
          w={'90%'}
          h={'40%'}
          mt={5}
          p={1}
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            justifyContent: 'space-between'
          }}
          // bgColor={'amber.300'}
        >
          {iconActivity.map((item, index, array) => (
              (index+1) < array.length-3 && (
                <View
                  key={index}
                  m={5}
                  style={{width: 'auto', height: 'auto'}}
                >
                  <Button
                    boxSize={70}
                    bgColor={'#F1F1F1'}
                    borderRadius={10}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderColor={'#e1e1e1'}
                    onPress={
                      (index+1)==9 ? () => setSelectIconPlus(true)
                      : () => {
                        setIconActivitySelected({iconActivitySelected: item.icon})
                        setTextActivity(item.name)
                      }
                    }
                    borderWidth={1}
                    _pressed={{
                      bgColor: '#FbFbFb',
                      // transform: [{ scale: 0.96 }]
                    }}
                    style={{ shadowColor: '#000', elevation: 20 }}
                  >
                    {(index+1)==9 ? <SvgXml stroke={'#F4863C'} width="40" height="40" xml={item.icon} /> :
                    <SvgXml fill={'#F4863C'}  width="40" height="40" xml={item.icon} />}
                  </Button>
                  <Text style={{marginTop: 7,textAlign: 'center', fontFamily: 'Sarabun-Regular'}}>{item.name}</Text>
                </View>
              ) 
          ))}
        </View>

        <Modal animationType='slide' transparent={true} visible={selectIconPlus}>
          <View style={{position: 'absolute', width: '100%', top: 210, alignSelf: 'center'}}>
            <View style={{
              width: '80%',
              height: 65,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: "#e1e1e1",
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              paddingHorizontal: 20,
            }}>
              <Text style={{ fontFamily: 'Sarabun-Medium', fontSize: 25 }}>
                เลือกไอคอน
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectIconPlus(false)
                }}
              >
                <MaterialCommunityIcons name="close-circle" size={30} color="#bbb" />
              </TouchableOpacity>
            </View>

            <View
              w={'80%'}
              h={'auto'}
              p={0}
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignSelf: 'center',
                justifyContent: 'space-between',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              bgColor={'gray.400'}
            >
              {iconActivity.map((item, index) => (
                (index+1) > 9 && (
                  <View
                    key={index}
                    m={4}
                    style={{width: 'auto', height: 'auto'}}
                  >
                    <Button
                      boxSize={70}
                      bgColor={'#F1F1F1'}
                      borderRadius={10}
                      justifyContent={'center'}
                      alignItems={'center'}
                      borderColor={'#e1e1e1'}
                      onPress={() => {
                        setIconActivitySelected({iconActivitySelected: item.icon})
                        setSelectIconPlus(false)
                      }}
                      borderWidth={1}
                      _pressed={{
                        bgColor: '#FbFbFb'
                      }}
                      style={{ shadowColor: '#000', elevation: 20 }}
                    >
                      <SvgXml fill={'#F4863C'} width="40" height="40" xml={item.icon} />
                    </Button>
                    <Text style={{marginTop: 7,textAlign: 'center', color: '#fff', fontFamily: 'Sarabun-Regular'}}>{item.name}</Text>
                  </View>
                )  
              ))}
            </View>
          </View>  
        </Modal>


        <Button style={styles.CreatelastButton} p={0} onPress={() => {
          setShowSelectIcon(false)
          navigation.navigate('CreateScreen', {
            textActivity: textActivity
          })
        }}>
          <Text style={{ 
            textAlign: 'center',
            marginTop: 5,
            color: '#fff',
            fontFamily: 'Sarabun-Regular',
            fontSize: 30
            }}>สร้างงาน</Text>
        </Button>
      </Modal>
    </Background>
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
  CreatelastButton: {
    width: '85%',
    height: 65,
    position: 'absolute',
    backgroundColor: "#666AF6",
    alignSelf: 'center',
    bottom: 30,
    borderRadius: 20,
  },
});

export default CreateActivitySelectIcon;