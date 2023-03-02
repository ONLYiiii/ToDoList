import {Input, Box, Text} from "native-base"
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Shadow } from 'react-native-shadow-2';
// import {useTheme} from '../hooks';

const CustomInput = ({
  width,
  height,
  marginHorizontal,
  variant,
  InputLeftElement,
  InputRightElement,
  placeholder,
  type,
  focusStyle,
  backgroundColor,
  borderColor,
  borderRadius,
  fontSize,
  description,
  errorText,
  colorDescriptipn,
  colorTextError,
  // isOnShadow
}) => {
  // const {sizes} = useTheme()
  return (
    <Box w={'100%'} alignItems={'center'}>
      {/* {isOnShadow && <Shadow
        distance={5}
        startColor={'#00000012'}
        offset={[6,6]}
        style={{
          width: sizes.width*0.78,
          height: 61,
          borderRadius: borderRadius
        }}
      />} */}
      <Input
        w={width}
        h={height}
        my={marginHorizontal}
        bgColor={backgroundColor}
        fontSize={fontSize}
        borderColor={borderColor}
        borderRadius={borderRadius}
        // position={isOnShadow && 'absolute'}
        variant={variant}
        type={type}
        _focus={focusStyle}
        InputLeftElement={InputLeftElement}
        InputRightElement={InputRightElement}
        placeholderTextColor={'coolGray.800'}
        placeholder={placeholder}
      />
      {description && !errorText ? (
          <Text
            fontSize={13}
            color={colorDescriptipn}
            paddingTop={8}
          >{description}</Text>
        ) : null}
      {errorText && (
        <Box w={'75%'} mt={1} flexDirection={'row'} alignItems={'center'}>
          <MaterialCommunityIcons name="shield-alert" size={15} color={colorTextError} />
          <Text
            ml={1}
            fontSize={13}
            color={colorTextError}
          >{errorText}</Text>
        </Box>
      )}
    </Box>
  )
}

CustomInput.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  marginHorizontal: PropTypes.number,
  variant: PropTypes.string,
  InputLeftElement: PropTypes.element,
  InputRightElement: PropTypes.element,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  focusStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  fontSize: PropTypes.number,
  description: PropTypes.string,
  errorText: PropTypes.string,
  colorDescriptipn: PropTypes.string,
  colorTextError: PropTypes.string

}

export default CustomInput