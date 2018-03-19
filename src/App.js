import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

const github = require('./images/github.png');
const facebook = require('./images/facebook.png');
const twitter = require('./images/twitter.png');
const face = require('./images/face.gif');

const particlesOptions ={
  particles:{
    number:{
      value:60,
      density:{
        enable:false,
        value_area:500
      }
    },
    line_linked: {
      enable: true,
      color: "#F0FFFF"
    },
    polygon: {
      nb_sides: 7
    },

  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet"/>
      <div>
        <h1>
        Georgios-Panagiotis Taxiarchou
        </h1>
        <img src={face} className="face" alt="face_logo" />
        <h2>
          CSE Student
        </h2>
        <Particles className = 'particles'
          params={particlesOptions}
        />
        <h4><a href="http://cs.uoi.gr">Department of Computer Science & Engineering UoI</a></h4>
        <hr/>
        <div className="buttons" id="buttons">
          <ul>
            <li><a href="https://github.com/George-Taxiarchou"><img src={github} className="App-logo" alt="github_logo" /></a></li>
            <li><a href="https://twitter.com/george_txr"><img src={twitter} className="App-logo" alt="twitter_logo" /></a></li>
            <li><a href="https://www.facebook.com/georgetxrc"><img src={facebook} className="App-logo" alt="facebook_logo" /></a></li>
          </ul>
        </div>

      </div>
      </div>
    );
  }
}

export default App;
