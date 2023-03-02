import {Button,Icon, Box} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PropTypes from 'prop-types';
import {useTheme} from '../hooks';

const CustomButton = ({
  type,
  width,
  height,
  paddings,
  iconName,
  postionIcon,
  nameBtn,
  scaleBtn=1,
  colorNameBtn,
  fontFamily,
  fontSize,
  borderRadius,
  backgroundColor,
  isPressedColor,
  onPress
}) => {
  const {fonts} = useTheme()

  return (
    <Box w={width}>
        {type === true ?
          postionIcon === "left" ? <Button 
            leftIcon={<Icon as={MaterialCommunityIcons} name={iconName} />}
            h={height}
            bgColor={backgroundColor}
            _icon={{backgroundColor: 'red.500', color: 'white', width: 100, height: 100}}
            _text={{fontFamily: fonts.text, color: colorNameBtn}}
            _pressed={{
              bg: isPressedColor,
              onPress: onPress,
              transform: [{ scale: scaleBtn }]
            }}
          >
            {nameBtn}
          </Button>
          : 
          <Button 
            RightIcon={<Icon as={MaterialCommunityIcons} name={iconName} />}
            h={height}
            bg={backgroundColor}
            _text={{fontFamily: {fontFamily}, color: colorNameBtn}}
            _pressed={{
              bg: isPressedColor,
              onPress: onPress,
              transform: [{ scale: scaleBtn }]
            }}
          >
            {nameBtn}
          </Button>
        
        :
        <Button
          borderRadius={borderRadius}
          h={height}
          bg={backgroundColor}
          p={paddings}
          _text={{fontFamily: fontFamily, color: colorNameBtn, fontSize: fontSize}}
          _pressed={{
            bg: isPressedColor,
            onPress: onPress,
            transform: [{ scale: scaleBtn }]
          }}
        >
          {nameBtn}
        </Button>
      }
    </Box>
  )
}

CustomButton.propTypes = {
  type: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  paddings: PropTypes.number,
  iconName: PropTypes.string,
  postionIcon: PropTypes.string,
  scaleBtn: PropTypes.number,
  nameBtn: PropTypes.string,
  colorNameBtn: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  isPressedColor: PropTypes.string,
  onPress: PropTypes.func
}

export default CustomButton