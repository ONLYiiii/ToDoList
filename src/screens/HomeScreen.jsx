import {useState} from 'react'
import { Modal } from 'react-native'
import {
  Text,
  Image,
  Box,
  View,
  Button,
  FormControl,
  Input,
  VStack,
} from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons';

import { Background } from '../components'
import Calendar from '../components/Calendar'
import ModernCalendarStrip from '../components/ModernCalendarStrip'
import { useData, useTheme } from '../hooks'
import { useNavigation } from '@react-navigation/native';
import ListActivity from '../components/ListActivity';

const HomeScreen = () => {
  const {assets} = useTheme()
  const {mock, expenses} = useData()
  const navigation = useNavigation()
  const [showModal, setShowModal] = useState(false);
  // console.log(mock.date)
  console.log(expenses)
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <Background>
      <View
        mt={2}
        w={'90%'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text
          fontSize={30}
          lineHeight={47}
          fontFamily={'Sarabun-Bold'}
        >
          {mock.date.monthText}
        </Text>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons 
            name="calendar-multiselect"
            size={36}
            color="#666AF6"
            onPress={() => setShowCalendar(true)}
            style={{marginRight: 4}}
          />
          <MaterialCommunityIcons
            name="inbox"
            size={36}
            color="#666AF6" 
            onPress={() => navigation.navigate('CreateAcitivityTest', {
              ModalVisiable: true
             })}
          />
        </View>
      </View>
      {/* <DateListEvent /> */}
      <ModernCalendarStrip />
      
      <Box 
        mt={5}
        bgColor={'#fff'}
        w={'100%'}
        h={'69%'}
        pt={7}
        px={5}
        borderTopLeftRadius={25}
        borderTopRightRadius={25}
        shadow={9}
      >
        <VStack space={3}>
          {expenses.map((item) => (
            <ListActivity key={item.id} name={item.name} timestart={item.timestart}  />
          ))}
        </VStack>
        
      </Box>

      {/*  Bottom Tabs */}
      <Box
        elevation={30}
        backgroundColor={'#fff'}
        // bottom={-437}
        padding={3}
        width={'100%'}
        borderTopWidth={1}
        borderTopColor={'#EDEDED'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        height={90}
        zIndex={2}
      >
        <Button 
          style={{
            backgroundColor: '#878AF5',
            marginLeft: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#EDEDED',
            paddingHorizontal: 10,
          }}
          boxSize={65}
          shadow={5}
          pt={4}
          bottom={0}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Image
            resizeMode={"contain"}
            alt={"Home Icon"}
            source={assets.tabIconHomeSelect}
            boxSize={44}
            alignSelf={'center'}
          />
          <Text
            style={{ fontSize: 12}}
            fontFamily={'Sarabun-SemiBold'}
            color={"white"}
            bottom={2}
            textAlign={'center'}
          >
            Home
          </Text>
        </Button>
        <Button
          onPress={() => navigation.navigate('CreateScreen', {
           createModalVisiable: true
          })}
          style={{bottom: 55}}
          backgroundColor={'#666AF6'}
          alignSelf={'center'}
          position={'absolute'}
          left={'43%'}
          zIndex={3}
          alignItems={'center'}
          justifyContent={'center'}
          width={70}
          height={70}
          borderRadius={40}
        >
          <View>
              <AntDesign name="plus" size={50} color="white" />
          </View>
        </Button>
        <Button
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#878AF5',
            marginRight: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#EDEDED',
            paddingHorizontal: 10,
          }}
          boxSize={65}
          shadow={5}
          pt={4}
          paddingLeft={3}
          bottom={0}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Image
            resizeMode={"contain"}
            alt={"Home Icon"}
            source={assets.tabIconSettingSelect}
            boxSize={35}
          />
          <Text
            style={{ fontSize: 12}}
            fontFamily={'Sarabun-SemiBold'}
            color={"white"}
            bottom={1}
          >
            Setting
          </Text>
        </Button>
      </Box>

      {/* Modal Calendar */}
      <Modal
          animationType="slide"
          transparent={true}
          visible={showCalendar}
          // onRequestClose={() => {
          //   setShowCalendar(!showCalendar);
          // }}
        >
          <Box 
            top={240}
            height={400}
            borderRadius={15}
            width={"90%"}
            alignSelf={'center'}
            bgColor={'#F0F0F0'}
            shadow={5}
          >
            <Calendar />
            <Button
                w={'35%'}
                h={'12%'}
                bottom={3}
                right={5}
                position={'absolute'}
                alignSelf={'flex-end'}
                bgColor={'#878AF5'}
                borderRadius={15}
                _text={{color: '#fff', fontSize: 18, lineHeight: 33, fontFamily: 'Sarabun-SemiBold'}}
                _pressed={{
                  bgColor: 'transparent',
                  onPress: () => setShowCalendar(false),
                  transform: [{ scale: 0.96 }]
                }}
            >เสร็จสิ้น</Button>
          </Box>
        </Modal>
    </Background>
  )
}

export default HomeScreen