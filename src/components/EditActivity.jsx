/* eslint-disable react/prop-types */
import { View, Text, Pressable ,Modal } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useData } from '../hooks';
import { Box, Button } from 'native-base';
import { SvgXml } from 'react-native-svg';

const EditActivity = ({idActivity, setModalEdit,modalEdit}) => {
  const navigation = useNavigation()
  const {activity, deleteActivity} = useData()
  const selectedActivity = activity.find((activity) => activity.id == idActivity)

  function deleteExpenseHandler() {
    console.log(activity.id)
    deleteActivity(idActivity)
    setModalEdit(false)
  }

  return (
    <Modal animationType='fade' transparent={true} visible={modalEdit} statusBarTranslucent={true} >
      <View style ={{justifyContent: 'center',alignItems: 'center',flex:1,backgroundColor: '#0000004e'}}>
        <View style={{backgroundColor:'#D5D5E2',width: '85%',height: 'auto',borderRadius: 10}}>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{width: 40,height:40,borderRadius:35,backgroundColor:'#F4863C',margin: 10,justifyContent: "center",alignItems: 'center',}}>
              <SvgXml fill={'#fff'} stroke={'#fff'} width={22} height={22} xml={selectedActivity.icon} />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style ={{marginLeft : 5,marginTop: 12,fontSize: 12,fontFamily:'Sarabun-Regular',color: '#6C6A6A'}}>{selectedActivity.dateAt} {selectedActivity.timestart}</Text>
              <Text style={{marginBottom: 10,marginLeft : 5,fontSize: 13,fontFamily:'Sarabun-Bold'}}>{selectedActivity.name}</Text>
            </View>

            <View style={{width: 150, alignItems: 'flex-end', marginRight: 20}}>
              <Pressable onPress={() => setModalEdit(false)} style={{justifyContent: 'flex-end'}} >
                <AntDesign name="closecircle" size={30} color="#494949" />
              </Pressable>
            </View>
          </View>

          <View style={{height: 2,width: '95%',backgroundColor: '#9b9a9a',alignSelf: 'center'}}/>

          <Box style={{
            width: '90%',
            marginTop: 5,
            backgroundColor: 'transparent',
            alignSelf: 'center',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 10,
            padding: 3,
            flexWrap: 'nowrap'
          }}>
            <Text style={{fontSize: 16, fontFamily: 'Sarabun-Regular'}}>{selectedActivity.comment}</Text>
          </Box>

          <View style={{flexDirection: 'row', justifyContent: 'space-around',marginHorizontal: 3, marginTop: 10}}>
            <Button
              p={0}
              onPress={() => deleteExpenseHandler()}
              backgroundColor={'#C7C7D1'}
              _pressed={{backgroundColor: '#d1d1d1'}}
              style={{
                width:60,
                height:60,
                borderRadius: 10,
                shadowColor: '#000000',
                elevation: 10
              }}>
                <View style={{alignItems: 'center'}}>
                  <Ionicons name="md-trash-bin" size={25} color="#F4863C" />
                  <Text style={{fontFamily:'Sarabun-Regular',fontSize: 12}}>ลบ</Text>
                </View> 
            </Button>
            <Button
              p={0}
              onPress={() => setModalEdit(false)}
              backgroundColor={'#C7C7D1'}
              _pressed={{backgroundColor: '#d1d1d1'}}
              style={{
                width:60,
                height:60,
                borderRadius: 10,
                shadowColor: '#000000',
                elevation: 10
              }}>
                <View style={{alignItems: 'center'}}>
                  <AntDesign name="checkcircle" size={25} color="#F4863C" />
                  <Text style={{fontFamily:'Sarabun-Regular',fontSize: 12}}>เสร็จสิ้น</Text>
                </View> 
            </Button>
          </View>

          <Button 
            p={0}
            onPress={() => navigation.replace('CreateScreen', {
              isEditing: true,
              textIconActivity: selectedActivity.name,
              iconSelected: selectedActivity.icon,
              selectedActivity: selectedActivity
            })}
            backgroundColor={'#C7C7D1'}
            _pressed={{backgroundColor: '#d1d1d1'}}
            style={{
              width:'75%',
              height: 60,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              marginBottom: 30,
              shadowColor: '#000000',
              elevation: 10
            }}>
              <View style={{flexDirection: 'row'}}>
                <Feather name="edit" size={24} color="black" style={{alignSelf: 'center'}}/>
                <Text style={{fontFamily:'Sarabun-Regular',fontSize:18,alignSelf: 'center'}}> เเก้ไขลิสต์</Text>
              </View>
          </Button>

        </View>
      </View>
  </Modal>
  )
}

export default EditActivity