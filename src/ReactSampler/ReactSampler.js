/* jshint esnext: true */
const React = require('react');
const PropTypes = require('prop-types');

class ReactSampler extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    /**
      This object will memo the Audio objects so we
      create them only once.
    **/
    this.soundElements = {};

    /**
      Converting keys to keyCodes.
    **/
    this.samples = this.props.samples.map((sample) => {
      sample.keyCode = sample.key.toUpperCase().charCodeAt(0);
      return sample;
    });

    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown(e){
    /**
      Prevent it from working when the focus is not on the body
      or when the sampler is disabled
    **/
    if(e.target !== document.body || this.props.disabled) return;

    this.samples.forEach((sample) => {
      if(sample.keyCode === e.which){
        this.playSound(sample);

        if(this.props.onLaunchSample)
          this.props.onLaunchSample(sample);
      }
    });
  }

  playSound(sample){
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
  }

  render() {
    return (
      <span />
    );
  }

};

ReactSampler.propTypes = {
  samples: PropTypes.array.isRequired,
  onLaunchSample: PropTypes.func,
  disabled: PropTypes.bool
};

export default ReactSampler;
