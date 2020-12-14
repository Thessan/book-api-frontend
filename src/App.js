import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { FirstPage } from './Pages/FirstPage'
import { TheLibrary } from './Pages/TheLibrary'
import { EachBookLibrary } from './Pages/EachBookLibrary'
import { EachBookTopRated } from './Pages/EachBookTopRated'
import { TopRatedBooks } from './Pages/TopRatedBooks'

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
          <EachBookLibrary />
        </Route>

        <Route path="/top-ten" exact>
          <TopRatedBooks />
        </Route>

        <Route path="/books/top-ten/:bookID">
          <EachBookTopRated />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
