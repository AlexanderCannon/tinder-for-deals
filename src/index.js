import { Route, Router, run } from 'viewsdx-run-react'
import Main from './Main.js'
import React from 'react'

const App = props => (
  <Router>
    <Route
      path='/'
      component={cprops => (
        <Main {...cprops} {...props} />
      )}
    />
  </Router>
)
run(App)
