import React, { Component } from 'react'
import '../styles/NewGame.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { defineGame } from '../store/game'

class NewGame extends Component {

  state = {

  }

  render() {
    console.log(this.props,'<<<PROPS???')
    return (
      <div className="new-game-container">
        <Link to="/" className="return">Return to menu</Link>
        <div className="new-game-options">
          
        </div>
      </div>
    )
  }
}
const mapProps = (dispatch) => ({ defineGame: (settings) => {dispatch(defineGame(settings))} })
export default connect(null,mapProps)(NewGame)