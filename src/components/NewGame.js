import React, { Component } from 'react'
import '../styles/NewGame.css'
import { Link } from 'react-router-dom'

class NewGame extends Component {
  render() {
    return (
      <div className="new-game-container">
        <Link to="/" className="return">Return to menu</Link>
      </div>
    )
  }
}

export default NewGame