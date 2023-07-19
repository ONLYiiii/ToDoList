import { 
  Text,
  Box,
  Image,
  Container, 
  Button,
  Pressable,
  View
} from "native-base";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from '../../hooks';

// eslint-disable-next-line react/prop-types
const IntroAllowAlert = ({nextStep}) => {
  const navigation = useNavigation();
  const {assets, sizes} = useTheme()
  return (
    <Box w={'100%'} h={'100%'} alignItems={'center'}>
      <Container mt={6} w={'100%'}>
        <Text
          alignItems={'center'}
          fontSize={44}
          fontFamily={'Kanit-SemiBold'}
          textAlign={'center'}
        >
          {'   '}รายชื่อสมาชิก
        </Text>

      </Container>

      <View style={{flexDirection: 'column'}}>
        <Text 
        fontSize={20}
        fontWeight={500}
        textAlign={'center'}
        marginBottom={3}
        width={'80%'}
      >
        นางสาว นิจวรีย๋ บุญเอื้อ 6321602647{'\n'}
        นาย จตุพัฒน์ บุญนิยม 6321602558{'\n'}
        นาย ศิวัช จันวิลัย 6321610178
      </Text>
      </View>
      

      <Button 
        backgroundColor={"#666AF6"}
        borderRadius={15}
        height={60}
        width={'85%'}
        _text={{ 
          fontSize: 25,
          lineHeight: 35, 
          fontFamily: 'Sarabun-SemiBold'
        }}
        _hover={{backgroundColor: "#666AF6"}}
        onPress={() => navigation.navigate('SignInScreen')}
      >
        ต่อไป
      </Button>
    </Box>
  )
}
  // boxSkip: {
  //   marginTop: 15,
  //   alignSelf: 'center',
  //   borderRadius: 50,
  //   width: '30%'ห,
  //   height: '15%'
  // }

export default IntroAllowAlert