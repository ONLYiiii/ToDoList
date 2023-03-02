import { 
  StatusBar, 
  Platform,
} from 'react-native'

import { 
  Box,
  ScrollView,
} from "native-base";

import {useTheme} from '../hooks';
import PropTypes from 'prop-types';

export default function Background({
  children,
  barStyleColor,
  isScrollView
}) {
  const {sizes} = useTheme()
  return (
    <Box
      flex={1}
      alignItems={'center'}
      backgroundColor='white'
      width={sizes.width}
      safeAreaTop
    >
      <StatusBar
          backgroundColor={Platform.OS === "android" && 'transparent'}
          translucent={Platform.OS === "android" && true}
          barStyle={barStyleColor === true ? 'light-content' : 'dark-content'}
      />
      { isScrollView === true ? 
        <ScrollView 
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            height: 'auto',
            width: sizes.width
          }}
        >
          {children}
        </ScrollView>
        : children
      }
    </Box>
  )
}

Background.propTypes = {
  children: PropTypes.node,
  barStyleColor: PropTypes.bool,
  isScrollView: PropTypes.bool
}
