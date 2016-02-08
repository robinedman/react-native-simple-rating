const React = require('react-native')
const {
  StyleSheet,
  View,
} = React
const times = require('lodash.times')
const Star = require('./Star')

const StarRating = ({numberOfStars = 5, rating = 0, onRate, size}) => (
  <View style={styles.container}>
    {times(numberOfStars, (i) => (
      <Star
        key={(i + 1)}
        onPress={() => onRate && onRate((i + 1))}
        isFilled={(i + 1) <= rating}
        size={size}
      />
    ))}
  </View>
)

StarRating.propTypes = {
  numberOfStars: React.PropTypes.number,
  rating: React.PropTypes.number,
  onRate: React.PropTypes.func,
  size: React.PropTypes.number,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

module.exports = StarRating
