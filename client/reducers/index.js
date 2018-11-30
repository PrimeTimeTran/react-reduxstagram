import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './PostsReducer'
import comments from './CommentsReducer'

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
})

export default rootReducer