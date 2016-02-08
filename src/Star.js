const React = require('react-native')
const {
  TouchableWithoutFeedback,
  Image,
} = React
const starIcon = require('./img/Star.png')
const starFilledIcon = require('./img/StarFilled.png')

const Star = ({isFilled, onPress, size = 64}) => (
  <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
    <Image
      style={{width: size, height: size}}
      source={isFilled ? starFilledIcon : starIcon} />
  </TouchableWithoutFeedback>
)

Star.propTypes = {
  isFilled: React.PropTypes.bool.isRequired,
  onPress: React.PropTypes.func,
  size: React.PropTypes.number,
}

module.exports = Star
