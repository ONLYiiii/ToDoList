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
  Input,

} from "native-base";

import {
  Background,
  CustomInput,
}from '../components'
import {useTheme, useData} from '../hooks';
import { MaterialIcons } from "@expo/vector-icons";

const SignUpScreen = () => {
    const navigation = useNavigation()
    const {assets} = useTheme()
    const {image} = useData()
    const [show, setShow] = useState(false)
  
    return (
      <Background
        isScrollView={true}
      >
        <Image
            source={assets.registerScreen}
            w={"70%"}
            resizeMode={'contain'}
            alt={'sw'}
            top={5}
            alignSelf={'center'}
        />
        <Text
          mt={8}
          fontSize={28}
          fontFamily={'Sarabun-Medium'}
          textAlign={'center'}
        >
          เริ่มต้นกันเลย!
        </Text>
  
        <Stack space={5} direction={'column'} w={'100%'} alignItems={'center'} mt={2}>
          <CustomInput
            width={'80%'}
            height={65}
            backgroundColor={'#F3F8FC'}
            borderRadius={15}
            fontSize={14}
            variant='unstyled'
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
              variant='unstyled'
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
              } 
              placeholder="รหัสผ่าน"
          />
          <CustomInput
              width={'80%'}
              height={65}
              backgroundColor={'#F3F8FC'}
              borderRadius={15}
              fontSize={14}
              variant='unstyled'
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
              } placeholder="ยืนยันรหัสผ่าน"
          />
            
            
          <Button
            w={"80%"}
            h={55}
            my={2}
            _text={{fontSize: 23, fontFamily: 'Sarabun-SemiBold'}}
            _pressed={{
              bgColor: 'transparent',
              transform: [{ scale: 0.96 }]
            }}
            borderRadius={30}
            backgroundColor={'#666AF6'}
            onPress={()=>navigation.navigate('SignInScreen')}
          >
            สมัครสมาชิก
          </Button>
  
          <Text fontFamily={'Sarabun-Medium'} fontSize={18}>หรือสมัครสมาชิกด้วย</Text>
  
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
  
          <Stack direction={'row'} alignItems='center' mt={2} mb={5}>
            <Text fontFamily={'Sarabun-Medium'} fontSize={18}>มีบัญชีอยู่แล้ว?</Text>
            <Button
              p={0}
              ml={5}
              variant={'ghost'}
              _text={{color: '#666AF6', fontSize: 18, fontFamily: 'Sarabun-SemiBold'}}
              _pressed={{
                bgColor: 'transparent',
                onPress: ()=>navigation.navigate('SignInScreen'),
                transform: [{ scale: 0.96 }]
              }}
            >เข้าสู่ระบบที่นี่</Button>
          </Stack>
        </Stack>
      </Background>
  )
}

export default SignUpScreen