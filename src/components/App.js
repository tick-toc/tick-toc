import React, { Component } from 'react';
import Bomb from './Bomb/Bomb';
// import TestSvg from './TestSvg'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bomb onClick />
        {/* <TestSvg /> */}
      </div>
    );
  }
}

export default App;
