var React = require('react');
var Sampler = require('../../index');

/**
  The configuration variable for the Sampler.
  It's an array of samples, each one with a relative path to the file, the keyCode
  that triggers the sample and optionally a startAt position, in seconds, for files that
  have a few ms of silence or whatever
**/
var samples = [{
  file: '/audio/horn.mp3',
  key: 'h', // horn
  startAt: 0.2 //seconds, obvs
},{
  file: '/audio/orch5.wav',
  key: 'o', // orchestra hit
  startAt: 0.05
},{
  file: '/audio/rimshot.mp3',
  key: 's' // rimshot
},{
  file: '/audio/cowbell.mp3',
  key: 'c' // cowbell
},{
  file: '/audio/gun.mp3',
  key: 'g' // gun shot
},{
  file: '/audio/reload.wav',
  key: 'r' // reload
},{
  file: '/audio/machinegun.mp3',
  key: 'm' // machine gun
}];

var ReactSamplerExample = React.createClass({

  handleSampleLaunch: function(sample){
    var elm = document.querySelector('[data-key='+sample.key+']');
    elm.classList.add('active');

    setTimeout(() => { elm.classList.remove('active')}, 150);
  },

  render: function() {
    return (
      <div>
        <h1>The sampler is on!</h1>
        <ul className="keys">
          <li data-key="h">
            <span className="key">h</span><span className="sample">horn</span></li>
          <li data-key="o">
            <span className="key">o</span><span className="sample">orchestra hit</span></li>
          <li data-key="s">
            <span className="key">s</span><span className="sample">rimshot</span></li>
          <li data-key="c">
            <span className="key">c</span><span className="sample">cowbell</span></li>
          <li data-key="g">
            <span className="key">g</span><span className="sample">gun shot</span></li>
          <li data-key="r">
            <span className="key">r</span><span className="sample">reload</span></li>
          <li data-key="m">
            <span className="key">m</span><span className="sample">machine gun</span></li>
        </ul>

        <Sampler samples={samples} onLaunchSample={this.handleSampleLaunch} disabled={false} />
      </div>
    );
  }

});

React.render(
  <ReactSamplerExample />,
  document.getElementById('content')
);