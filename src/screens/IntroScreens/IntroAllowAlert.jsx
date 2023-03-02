import { 
  Text,
  Box,
  Image,
  Container, 
  Button,
  Pressable,
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
          fontSize={44}
          fontFamily={'Kanit-SemiBold'}
          textAlign={'center'}
        >
          ให้ฉัน
          <Text color={'#666AF6'}>
            เตือน
          </Text>
          คุณ
        </Text>

        <Text mt={1} fontSize={18} fontWeight={500}>
          คุณต้องการรับการแจ้งเตือนเกี่ยวกับงานหรือไม่
        </Text>
      </Container>

      <Image 
        source={assets.IntroAlert}
        alt="Get Started"
        style={{ marginTop: 10 }}
        width={sizes.width *0.7}
        resizeMode="contain"
      />

      <Text 
        fontSize={16}
        fontWeight={500}
        textAlign={'center'}
        marginBottom={3}
        width={'80%'}
      >
        คุณสามารถปรับการแจ้งเตือนได้ในตั้งค่าคุณจะไม่ถูกสแปม
      </Text>

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
        อนุญาตการแจ้งเตือน
      </Button>
      <Pressable onPress={nextStep}>
        <Text 
          mt={5}
          fontSize={20}
          fontFamily={'Sarabun-SemiBold'}
          textAlign={'center'}
          marginBottom={3}
          width={'80%'}
        >
          ข้ามไปก่อน
        </Text>
      </Pressable>
    </Box>
  )
}
  // boxSkip: {
  //   marginTop: 15,
  //   alignSelf: 'center',
  //   borderRadius: 50,
  //   width: '30%',
  //   height: '15%'
  // }

export default IntroAllowAlert