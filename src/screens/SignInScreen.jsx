import {useState} from "react";
import {useNavigation} from '@react-navigation/core';

import {
  Button,
  Box,
  Image,
  Stack,
  Text,
  Pressable,
  Icon,
} from "native-base";

import {
  Background,
  CustomInput,
}from '../components'
import {useTheme, useData} from '../hooks';
import { MaterialIcons } from "@expo/vector-icons";

const SignInScreen = () => {
  const navigation = useNavigation()
  const {assets} = useTheme()
  const {image} = useData()
  const [show, setShow] = useState(false)

  return (
    <Background>
      <Image
          source={assets.loginScreen}
          w={"70%"}
          resizeMode={'contain'}
          alt={'sw'}
          top={5}
      />
      <Text
        mt={8}
        fontSize={28}
        fontFamily={'Sarabun-Medium'}
      >
        ยินดีต้อนรับกลับมา
      </Text>

      <Stack space={5} direction={'column'} w={'100%'} alignItems={'center'} mt={2}>
        <CustomInput
          width={'80%'}
          height={65}
          backgroundColor={'#F3F8FC'}
          borderRadius={15}
          fontSize={14}
          variant='ghost'
          focusStyle={{
            backgroundColor: '#F3F8FC',
            borderColor: 'blue.300',
            borderWidth: 2,
            fontSize: 16
          }}
          InputLeftElement={
            <Icon 
              as={<MaterialIcons name="email" />}
              size={5}
              ml={4}
              color={"muted.500"}
            />
          } placeholder="อีเมล"
        />

        <CustomInput
            width={'80%'}
            height={65}
            backgroundColor={'#F3F8FC'}
            borderRadius={15}
            fontSize={14}
            variant='ghost'
            focusStyle={{
              backgroundColor: '#F3F8FC',
              borderColor: 'blue.300',
              borderWidth: 2,
              fontSize: 16
            }}
            type={show ? "text" : "password"}
            InputLeftElement={
                <Icon as={<MaterialIcons name={"lock"} />}
                    size={5}
                    ml={4}
                    color={"muted.500"}
                />
            }
            InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                        size={5}
                        mr={5}
                        color="muted.400"
                    />
                </Pressable>
            } placeholder="รหัสผ่าน"
        />
            
        {/* <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} w={'75%'}>
          <Checkbox
            value="test"
            accessibilityLabel="Remember Me"
            colorScheme="lightBlue"
            borderColor={'blue.300'}
            size={'sm'}
            _text={{fontSize: 16}}
          >
            จดจำฉัน
          </Checkbox>

          <Button
            p={0}
            variant={'ghost'}
            _text={{color: 'black', fontSize: 16}}
            _pressed={{
              bg: isPressedColor,
              onPress: onPress,
              transform: [{ scale: scaleBtn }]
          }}
            onPress={() => navigation.navigate('ForgetPasswordScreen')}
          >ลืมรหัสผ่าน?</Button>
        </Stack> */}
          
        <Button
          w={"80%"}
          h={55}
          my={2}
          _text={{fontSize: 23, fontFamily: 'Sarabun-SemiBold'}}
          _pressed={{
            bgColor: 'transparent',
            // onPress: ()=>navigation.navigate('SignUpScreen'),
            transform: [{ scale: 0.96 }]
          }}
          borderRadius={30}
          backgroundColor={'#666AF6'}
          onPress={()=>navigation.navigate('HomeScreen')}
        >
          เข้าสู่ระบบ
        </Button>

        <Text fontFamily={'Sarabun-Medium'} fontSize={18}>หรือเข้าสู่ระบบด้วย</Text>

        <Stack
          direction={'row'}
          space={4}
          // alignItems={'center'}
          justifyContent={'center'}
          w='100%'
        >
          {image.map((element, index) => 
            <Pressable
              key={index}
              _pressed={{
                bgColor: 'transparent',
                // onPress: ()=>navigation.navigate('SignUpScreen'),
                transform: [{ scale: 0.96 }]
              }}
            >
              <Box
                w={70}
                h={70}
                padding={3}
                rounded={35}
                borderColor={'coolGray.400'}
                bgColor={'gray.100'}
                shadow={3}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Image
                  w={30}
                  h={30}
                  source={element.img}
                  alt={element.name}
                />
              </Box>
            </Pressable>
          )}
        </Stack>

        <Stack direction={'row'} alignItems='center' mt={2}>
          <Text fontFamily={'Sarabun-Medium'} fontSize={18}>ยังไม่มีบัญชี?</Text>
          <Button
            p={0}
            ml={5}
            variant={'ghost'}
            _text={{color: '#666AF6', fontSize: 18, fontFamily: 'Sarabun-SemiBold'}}
            _pressed={{
              bgColor: 'transparent',
              onPress: ()=>navigation.navigate('SignUpScreen'),
              transform: [{ scale: 0.96 }]
            }}
          >สมัครสมาชิกที่นี่</Button>
        </Stack>
      </Stack>
    </Background>
  )
}

export default SignInScreen