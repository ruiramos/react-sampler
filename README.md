react-sampler
==============

Developing an invoicing app using React?

Another project management app?!

Think your TodoMVC could use a little... flare?

___React Sampler might just be what you need!___

Easily assign sound samples to keyboard keys and make your apps fun again!
Delight your users with sounds for every occasion, from a victory Horn to a desperate Gun Shot!

Sound files from [freesound.org](http://freesound.org/)

## Demo
Check the [GitHub page](http://ruiramos.github.io/react-sampler) or the examples folder (there's a README there as well).

As seen live on [great.dj](http://great.dj/)!

## Usage

```javascript
var Sampler = require('react-sampler');

var samples = [{
  file: '/path/to/file.mp3',
  key: 'h',
  startAt: 0 // in seconds, defaults to 0 (begging of the file)
},{
  ...
}]

<Sampler samples={samples} onLaunchSample={this.handleSampleLaunch} />
```

## Contributing

I'm using [Babel](https://github.com/babel/babel) to create the transpiled file from the .jsx source, and browserify/watchify to create the distribution build, so installing these might be a good start!


## License

[MIT License](http://opensource.org/licenses/MIT)
