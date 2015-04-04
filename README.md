react-sampler
==============
Because your apps are boring.

Developing an invoicing app using React? Think your TodoMVC could use a little flare?
React Sampler might just be what you need!

Easily assign sound samples to keyboard keys and make your apps fun again!
Delight your users with sounds for every occasion, from a victory Horn to a hopeless Gun Shot!

Sound files from [freesound.org](http://freesound.org/)

## Demo
Soon.

## Usage

```
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

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
