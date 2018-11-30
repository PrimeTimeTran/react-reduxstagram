import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import posts from './data/posts'
import comments from './data/comments'

import rootReducer from './reducers'

const defaultState = {
  posts,
  comments
}

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const history = syncHistoryWithStore(browserHistory, store)

export default store