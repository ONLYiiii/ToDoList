import {
  View,
  Text,
  Box,
} from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const dataDate = ["อา.","จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."]

const DateListEvent = () => {
  return (
    <View w={'100%'} mt={2} mb={4} flexDirection={'row'} justifyContent={'space-evenly'}>
      {dataDate.map((item) => (
      <View key={item} w={7} alignItems={'center'} flexDirection={'column'}>
        <Text ml={1} fontFamily={'Sarabun-SemiBold'}>{item}</Text>
        <Text fontSize={14} fontFamily={'Sarabun-SemiBold'}>12</Text>
        <View flexDirection={'row'}>
          <Box
            ml={0.5}
            bgColor={'#666AF6'}
            borderRadius={'full'}
            boxSize={3}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <MaterialCommunityIcons name="inbox" size={8} color="#fff" />
          </Box>
          <Box
            ml={0.5}
            bgColor={'#666AF6'}
            borderRadius={'full'}
            boxSize={3}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <MaterialCommunityIcons name="inbox" size={8} color="#fff" />
          </Box>
        </View>
      </View>
      ))}
    </View>
  )
}

export default DateListEvent