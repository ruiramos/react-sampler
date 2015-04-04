/* jshint esnext: true */
var React = require('react');

module.exports = React.createClass({
  propTypes: {
    samples: React.PropTypes.array.isRequired,
    onLaunchSample: React.PropTypes.func
  },

  componentWillMount: function(){
    /**
      This object will memo the Audio objects so we only
      create them once.
    **/
    this.soundElements = {};

    /**
      Converting keys to keyCodes.
    **/
    this.samples = this.props.samples.map((sample) => {
      sample.keyCode = sample.key.toUpperCase().charCodeAt(0);
      return sample;
    });

    /**
      Magic!
    **/
    window.addEventListener('keydown', this.handleKeyDown);

  },

  handleKeyDown: function(e){
    /**
      Prevent it from working where the focus is not on the body
    **/
    if(e.target !== document.body) return;

    this.samples.forEach((sample) => {
      if(sample.keyCode === e.which){
        this.playSound(sample);

        if(this.props.onLaunchSample)
          this.props.onLaunchSample(sample);
      }
    });
  },

  playSound: function(sample){
    var soundPath = sample.file,
        start = sample.startAt || 0;

    // using the sound file path as the key here
    if(this.soundElements[soundPath]){
      this.soundElements[soundPath].currentTime = start;
      this.soundElements[soundPath].play();
    } else {
      this.soundElements[soundPath] = new Audio(soundPath);
      this.soundElements[soundPath].play();
    }
  },

  render: function() {
    return (
      <span />
    );
  }

});

