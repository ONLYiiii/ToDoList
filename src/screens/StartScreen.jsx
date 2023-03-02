// import { 
//   Stack,
//   Text,
//   Divider,
//   Box,
//   Image
// } from "native-base";

// import {
//   Background,
//   CustomButton,
//   CustomImage,
//   CustomPressable,
// }from '../components'

// import {useNavigation} from '@react-navigation/core';
// import {useTheme} from '../hooks';

// const StartScreen = () => {
//   // const {theme} = useData()
//   const navigation = useNavigation();
//   const {assets, sizes, fonts} = useTheme()

//   const imgData = [{
//     name: 'เข้าสู่ระบบด้วย Facebook',
//     img: assets.facebook,
//   },
//   {
//     name: 'เข้าสู่ระบบด้วย Google',
//     img: assets.google,
//   },
//   {
//     name: 'เข้าสู่ระบบด้วย Apple',
//     img: assets.apple,
//   }]

//   return (
//     <Background>
//       <CustomImage 
//         imageSource={assets.startScreen}
//         sizeWidth={0.8}
//         sizeHeight={0.30}
//         marginTop={5}
//         safeAreaTop
//       />

//       <Text
//         mt={2}
//         fontSize={60}
//         lineHeight={70}
//         fontFamily={fonts.p}
//       >
//         Eveon
//       </Text>

//       <Stack
//         direction={'column'}
//         space={4}
//         alignItems={'center'}
//         w='100%'
//       >
//         {imgData.map((element, index) => 
//           <CustomPressable
//             key={index}
//             direction={'row'}
//             width='80%'
//             backgroundColor={'coolGray.100'}
//             padding={3.5}
//             rounded={15}
//             borderWidth={1}
//             borderColor={'coolGray.400'}
//             scale={0.96}
//             isPressedColor={'coolGray.200'}
//             isHoveredColor={'coolGray.200'}
//           >
//             <Image
//               w={30}
//               h={30}
//               source={element.img}
//               alt={element.name}
//             />
//             <Text marginX={3}></Text>
//             <Text fontFamily={fonts.p} fontSize={sizes.sm}>{element.name}</Text>
//           </CustomPressable>
//         )}
//       </Stack>

//       <Box flexDirection={'row'} alignItems='center' justifyContent={'center'} paddingY={8}>
//         <Divider 
//           my="2" 
//           width={sizes.width*0.8} 
//           _light={{ bg: "muted.400"}}
//         />
//         <Box bgColor={'white'} position={'absolute'}>
//             <Text fontFamily={fonts.text}>{'  '}หรือเข้าสู่ระบบด้วย{'  '}</Text>
//         </Box>
//       </Box>

//       <CustomButton
//         width={"80%"}
//         height={55}
//         nameBtn={"เข้าสู่ระบบด้วยรหัสผ่าน"}
//         fontSize={17}
//         colorNameBtn={'white'}
//         borderRadius={30}
//         backgroundColor={'success.700'}
//         isPressedColor={'success.600'}
//         onPress={()=>navigation.navigate('SignInScreen')}
//       />
//       {/* <Button onPress={()=>navigation.navigate('SignInScreen')}>เข้าสู่ระบบด้วยรหัสผ่าน</Button> */}

//       <Stack marginTop={5}  direction={'row'} alignItems='center'>
//         <Text fontSize={16} fontFamily={fonts.p}>หากยังไม่มีบัญชี?</Text>
//         <CustomButton
//           nameBtn='สมัครสมาชิกที่นี่'
//           fontFamily={fonts.h1}
//           fontSize={16}
//           backgroundColor={'transparent'}
//           colorNameBtn={'success.700'}
//           navigationName='SignUpScreen'
//           scaleBtn={0.96}
//           onPress={()=>navigation.navigate('SignUpScreen')}
//         />
//       </Stack>
      

//     </Background>
    
//   )
// }

// export default StartScreen