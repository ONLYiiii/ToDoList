import { useState, useEffect} from 'react';
import { BackHandler } from 'react-native';
import { 
  Text, 
  HStack,
  Alert
} from "native-base";

import { Background }from '../components';
import {
  IntroGetStarted,
  IntroListEvent,
  IntroAllowAlert
} from './IntroScreens';

const IntroScreen = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [show, setShow] = useState(false);
  const [confimExit, setConfirmExit] = useState(1)

  useEffect(() => {
    const backAction = async () => {
      setShow(true)
      setTimeout(() => setShow(false), 2000)
      if (confimExit == 2) {
        BackHandler.exitApp()
      } else if (confimExit == 1) {
        setTimeout(() => {
          setConfirmExit(1)
        }, 2500)
      }
      setConfirmExit(confimExit+1)
      return true
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [confimExit]);

  const nextStep = () => {
    switch(currentStep) {
      case 0:
        setCurrentStep(1)
        break
      case 1:
        setCurrentStep(2)
        break
      case 2:
        setCurrentStep(0)
        // navigation.replace('SignInScreen')
        break
    }
  }

  return (
    <Background> 
      
      {currentStep === 0 ?
        <IntroGetStarted nextStep={nextStep} />
        : currentStep === 1 ?
        <IntroListEvent nextStep={nextStep} />
        :
        <IntroAllowAlert nextStep={nextStep}/>
      }
     

      {show && 
        <Alert 
          w='80%'
          position={'absolute'}
          bottom={10}
          borderRadius={10}
          variant="solid"
          background='#3A416F'
          status="warning"
        >
          <HStack 
            flexShrink={1} 
            space={2} 
            w="100%"
            alignItems="center" 
            justifyContent="space-between"
          >
            <HStack space={2} flexShrink={1} alignItems="center">
              <Alert.Icon />
              <Text color={"white"} fontSize={16}>
                กดย้อนกลับครั้งเพื่อปิดแอป
              </Text>
            </HStack>
          </HStack>
        </Alert>
      }
    </Background>
  );
}

export default IntroScreen