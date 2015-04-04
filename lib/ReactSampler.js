/* jshint esnext: true */
'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    samples: React.PropTypes.array.isRequired,
    onLaunchSample: React.PropTypes.func
  },

  componentWillMount: function componentWillMount() {
    /**
      This object will memo the Audio objects so we only
      create them once.
    **/
    this.soundElements = {};

    /**
      Converting keys to keyCodes.
    **/
    this.samples = this.props.samples.map(function (sample) {
      sample.keyCode = sample.key.toUpperCase().charCodeAt(0);
      return sample;
    });

    /**
      Magic!
    **/
    window.addEventListener('keydown', this.handleKeyDown);
  },

  handleKeyDown: function handleKeyDown(e) {
    var _this = this;

    /**
      Prevent it from working where the focus is not on the body
    **/
    if (e.target !== document.body) {
      return;
    }this.samples.forEach(function (sample) {
      if (sample.keyCode === e.which) {
        _this.playSound(sample);

        if (_this.props.onLaunchSample) _this.props.onLaunchSample(sample);
      }
    });
  },

  playSound: function playSound(sample) {
    var soundPath = sample.file,
        start = sample.startAt || 0;

    // using the sound file path as the key here
    if (this.soundElements[soundPath]) {
      this.soundElements[soundPath].currentTime = start;
      this.soundElements[soundPath].play();
    } else {
      this.soundElements[soundPath] = new Audio(soundPath);
      this.soundElements[soundPath].play();
    }
  },

  render: function render() {
    return React.createElement('span', null);
  }

});
