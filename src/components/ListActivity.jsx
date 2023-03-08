/* eslint-disable react/prop-types */
import {
  Text,
  Box,
  View,
  Button,
  Divider,
} from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const ListActivity = ({name,timestart}) => {
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
            <MaterialCommunityIcons name="cart" size={30} color="#fff" />
          </Box>
        </View>
        <View
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <Text>{timestart}</Text>
          <Text>{name}</Text>
        </View>
      </View>
      <Box 
        boxSize={30}
        borderRadius={'full'}
        // bgColor={'#878AF5'}
        borderWidth={3}
        borderColor={'#878AF5'}
      >
        {/* <MaterialCommunityIcons name="check" size={24} color="#fff" /> */}
      </Box>
    </View>
  )
}

export default ListActivity