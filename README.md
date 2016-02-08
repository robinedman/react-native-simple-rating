# React Native Simple Star Rating
A simple star rating component. It has few dependencies and is completely
stateless, making it predictable and easy to integrate with something like
Redux if you like.

## Installation
```
npm install --save react-native-simple-rating
```

## Usage
Editable rating:
```
<StarRating
  rating={this.state.rating}
  onRate={(rating) => this.setState({rating: rating})} />
```

Read-only rating:
```
<StarRating rating={this.state.rating} />
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits
Icons from Font Awesome by Dave Gandy - http://fontawesome.io.
