import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { FirstPage } from './FirstPage'
import { TheLibrary } from './TheLibrary'
import { EachBook } from './EachBook'
import { TopRatedBooks } from './TopRatedBooks'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FirstPage />
        </Route>

        <Route path="/books" exact>
          <TheLibrary />
        </Route>

        <Route path="/books/:bookID">
          <EachBook />
        </Route>

        <Route path="/top-ten" exact>
          <TopRatedBooks />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
