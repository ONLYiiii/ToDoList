import { 
  Text,
  Box,
  Image,
  Container, 
  Button,
} from "native-base";

import { useTheme } from '../../hooks';

// eslint-disable-next-line react/prop-types
const IntroListEvent = ({nextStep}) => {
  const {assets, sizes} = useTheme()
  return (
    <Box w={'100%'} h={'100%'} alignItems={'center'}>
      <Container mt={6} w={'100%'}>
        <Text
          color={'#666AF6'}
          fontSize={44}
          fontFamily={'Kanit-SemiBold'}
          textAlign={'center'}
        >
          ไทม์ไลน์
        </Text>

        <Text
          fontFamily={'Kanit-SemiBold'}
          lineHeight={50}
          fontSize={38}
        >
          ในแต่ละวันของคุณ
        </Text>

        <Text fontSize={18}>
        งานทั้งหมดของคุณในไทม์ไลน์ภาพ
        </Text>
      </Container>
      <Image 
        source={assets.IntroListEvent}
        alt="Get Started"
        style={{ marginVertical: 10 }}
        width={sizes.width *0.7}
        resizeMode="contain"
      />

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
        ดำเนินการต่อ
      </Button>
    </Box>
  )
}

export default IntroListEvent