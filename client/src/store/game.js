import axios from 'axios'

const initialGame = {
  startTime: 300,
  finishTime: 0,
  moduleTotal: 1,
  modulesCompleted: 0,
  strikesAllowed: 3,
  strikeCount: 0,
  SubjectOfWires: {
    active: true,
    passed: false
  },
  gameStatus: 'pending'
}

//ACTION TYPES
const DEFINE_GAME = 'DEFINE_GAME'

//ACTION CREATORS
export const defineGame = (settings) => ({type: DEFINE_GAME, settings})

// THUNK CREATORS

// here will go the saveGame thunk for storing it to the db

export default function(state = initialGame, action) {
  switch (action.type) {
    case DEFINE_GAME: 
    return state
    default:
    return state
  }
} 