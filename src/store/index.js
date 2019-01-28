import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import game from './game'

const reducers = combineReducers({ game })

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))

const store = createStore(reducers, middleware)

export default store
export * from './user'
export * from './game'