import {Image, Box, Pressable} from "native-base"
import PropTypes from 'prop-types';

const BackButton = ({
  onPress,
  source
}) => {
  return (
    <Box position={'absolute'} left={-25} zIndex={2} padding={10}>
        <Pressable onPress={onPress}>
            <Image source={source} alt={'backBtn'} size={'sm'} />
        </Pressable>
    </Box>
  )
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number
}

export default BackButton