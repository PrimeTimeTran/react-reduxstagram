import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import PhotoGrid from './components/PhotoGrid'
import SinglePhoto from './components/SinglePhoto'

import css from './styles/style.styl'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={SinglePhoto}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))