import { 
  Text,
  Box,
  Image,
  Container, 
  Button,
} from "native-base";

import { useTheme } from '../../hooks';

// eslint-disable-next-line react/prop-types
const IntroGetStarted = ({ nextStep }) => {
  const {assets, sizes} = useTheme()
  return (
    <Box w={'100%'} h={'100%'} alignItems={'center'}>
      <Container mt={12}>
        <Text
          fontSize={50}
          lineHeight={47}
          fontFamily={'Sarabun-Bold'}
        >
          Do to Day
        </Text>

        <Text
          fontSize={33}
          fontWeight={600}
        >คือ
          <Text color={'#666AF6'}>
            {'  '}แพลนเนอร์รายวัน
          </Text>
        </Text>

        <Text fontSize={18} fontWeight={500}>
          มาจัดตารางเวลาในแต่ละวันของคุณกัน
        </Text>
      </Container>

      <Image 
        source={assets.IntroGetStarted}
        alt="Get Started"
        style={{ marginVertical: 80 }}
        width={sizes.width *0.7}
        resizeMode="contain"
      />

      <Text 
        fontSize={16}
        fontWeight={600}
        marginY={3}
        bottom={-5}
      >
        ใช้เวลาในการจัดกิจกรรมในรายวัน เพียงไม่กี่นาที
      </Text>

      <Button 
        backgroundColor={"#666AF6"}
        borderRadius={15}
        bottom={-10}
        height={60}
        width={'85%'}
        _text={{ 
          fontSize: 25,
          lineHeight: 35, 
          fontFamily: 'Sarabun-SemiBold'
        }}
        onPress={nextStep}
      >
        เริ่มต้นใช้งาน
      </Button>
    </Box>
  )
}

export default IntroGetStarted