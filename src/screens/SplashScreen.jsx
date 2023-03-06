import { VStack, Box } from 'native-base'
import {useNavigation} from '@react-navigation/core';
import loading from '../assets/img/loading.json'
import loadingpercet from '../assets/img/laodingpercent.json'

import Lottie from 'lottie-react-native';

const SplashScreen = () => {
    const navigation = useNavigation();
    return (
        <VStack w='100%' h='100%'>
            <Box flex={3}>
            <Lottie 
                source={loading}
                autoPlay 
                loop={true}
                speed={1}
                renderMode={'AUTOMATIC'}
            />
            </Box>
            <Box flex={1}>
            <Lottie 
                source={loadingpercet}
                autoPlay 
                loop={false}
                speed={2}
                style={{marginTop: 10}}
                onAnimationFinish={() => navigation.replace('HomeScreen')}
            />
            </Box>
        </VStack>
    
  )
}

export default SplashScreen