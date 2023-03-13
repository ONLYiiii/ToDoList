/* eslint-disable react/prop-types */
import {useState} from 'react'
import {
  Text,
  Box,
  View,
  Button,
} from 'native-base'

import EditActivity from './EditActivity'

import editing from '../assets/icons/edit.svg'
import { SvgXml } from 'react-native-svg'

const ListActivity = ({name,timestart, icon, idActivity}) => {
  const [modalEdit, setModalEdit] = useState(false);

  return (
    <View
      flexDirection={'row'}
      alignItems={'center'}
      // bgColor={'amber.400'}
      width={'100%'}
      justifyContent={'space-between'}
    >
      <View flexDirection={'row'} alignItems={'center'}>
        <Text fontFamily={'Sarabun-Medium'} fontSize={16}>{timestart}</Text>

        <View flexDirection={'column'} alignItems={'center'}>
          <Box
            boxSize={50}
            borderRadius={'full'}
            bgColor={'#878AF5'}
            marginX={3}
            p={1}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <SvgXml fill={'#fff'} width={30} height={30} xml={icon} />
          </Box>
        </View>
        <View
          flexDirection={'column'}
          justifyContent={'center'}
          mr={3}
        >
          <Text>{timestart}</Text>
          <Text>{name}</Text>
        </View>

        <Button
          p={0}
          bgColor={'transparent'}
          onPress={()=>setModalEdit(true)}
        >
          <SvgXml stroke={'#F5A912'} width={40} height={40} xml={editing} />
        </Button>
        </View>
      <Box 
        boxSize={30}
        borderRadius={'full'}
        // bgColor={'#878AF5'}
        borderWidth={3}
        borderColor={'#878AF5'}
        style={{right: 130}}
      >
        {/* <MaterialCommunityIcons name="check" size={24} color="#fff" /> */}
      </Box>
      {modalEdit && <EditActivity idActivity={idActivity} modalEdit={modalEdit} setModalEdit={setModalEdit}/>}
    </View>
  )
}

export default ListActivity