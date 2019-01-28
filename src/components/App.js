import React, { Component } from 'react'
import Bomb from './Bomb/Bomb'
import '../styles/App.css'
import Login from './Login'
import {Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    // Check if user is logged in
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">TICK TOC</h1>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* ^^ Will render main-menu or Login, if logged in or not */}
          <Route exact path="/new-game" component={Login}/> 
          {/* ^^^ Will render game menu / game options */}
          <Route exact path="/previous-games" component={Login}/> 
          {/* ^^^ Will render previous games */}
          <Route exact path="/leaderboards" component={Login}/> 
          {/* ^^^ Will render leaderboards*/}
          <Route exact path="/diffusing" component={Bomb} />

          <Route exact path="/recap" component={Bomb} />
          {/* ^^^ Will render post game results */}
          <Route component={Login} />
        </Switch>
      </div>
    );
  }
}
{/* 
  Conditional Checking if isLogged or not
*/}

export default App
