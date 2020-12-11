import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { TheLibrary } from './TheLibrary'
import { EachBook } from './EachBook'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <TheLibrary />
        </Route>

        <Route path="/books/:bookID">
          <EachBook />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
