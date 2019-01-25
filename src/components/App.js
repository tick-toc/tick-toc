import React, { Component } from 'react';
import Bomb from './Bomb';
// import Globe from './Globe'
// import TestSvg from './TestSvg'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Globe /> */}
        <Bomb />
        {/* <TestSvg /> */}
      </div>
    );
  }
}

export default App;
