/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {useState} from 'react'
import {
  Text,
  Image,
  Box,
  View,
  Button,
  VStack,
  Pressable
} from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import {
  Background,
  DateTimePicker,
  ListActivity,
  ModernCalendarStrip,
  CreateActivitySelectIcon
} from '../components'
import { useData, useTheme } from '../hooks'
// import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

const HomeScreen = ({navigation}) => {
  const {icons} = useTheme()
  const { activity, dateStripSelect} = useData()
  // console.log(dateStripSelect)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showSelectIcon, setShowSelectIcon] = useState(false)

  return (
    <Background>
      <View
        mt={10}
        w={'20%'}
        position={'absolute'}
        zIndex={4}
        right={5}
        flexDirection={'row'}
      >
        <View flexDirection={'row'} style={{alignSelf: 'flex-end', padding: 5}}>
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
            onPress={() => setShowSelectIcon(true)}
          />
        </View>
      </View>

      {/* <DateListEvent /> */}
      <ModernCalendarStrip />
      
      {/* List Activity */}
      <Box 
        mt={5}
        w={'100%'}
        pt={7}
        px={5}
        flex={1}
        bgColor={'#fff'}
        borderTopLeftRadius={25}
        borderTopRightRadius={25}
        shadow={9}
      >
        <VStack direction={'column-reverse'} style={{position: 'absolute', alignSelf: 'center', left: 10, top: 30}}>
          {activity.map((item, index, array) => (
            (dateStripSelect.dateStrip == item.dateAt) && <View key={index}>
              <ListActivity name={item.name} timestart={item.timestart} icon={item.icon} idActivity={item.id} />
              {index != array.length  && <View style={{ height: 80, backgroundColor: '#dbdbdb',width:2, marginLeft: 75}}/>}
            </View>
          ))}
        </VStack>
      </Box>

      {/*  Bottom Tabs */}
      <Box
        elevation={30}
        backgroundColor={'#fff'}
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
            padding: 0,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#EDEDED',
            paddingHorizontal: 10,
          }}
          boxSize={65}
          shadow={5}
          pt={4}
          bottom={0}
          // onPress={() => navigation.replace('HomeScreen')}
        >
          <Image
            resizeMode={"contain"}
            alt={"Home Icon"}
            source={icons.tabIconHomeSelect}
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
          onPress={() => setShowSelectIcon(true)}
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
          <SvgXml stroke={'#fff'} width="40" height="40" xml={icons.plus} />
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
          px={0}
          bottom={0}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Image
            resizeMode={"contain"}
            alt={"Home Icon"}
            source={icons.tabIconSettingSelect}
            boxSize={35}
            ml={1}
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
      {showCalendar && <DateTimePicker mode={"date"} showCalendar={showCalendar}  setShowCalendar={setShowCalendar} />}
      {/* Modal Create Activity Select Icon */}
      {showSelectIcon && <CreateActivitySelectIcon showSelectIcon={showSelectIcon} setShowSelectIcon={setShowSelectIcon} />}
    </Background>
  )
}

export default HomeScreen