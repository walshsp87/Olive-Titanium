import React, { Component } from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import { Navigation } from './components/navigation/Navigation'
import { DashboardLayout } from './components/dashboard/DashboardLayout'
import { TransactionsLayout } from './components/transactions/TransactionsLayout'
import { CategoriesLayout } from './components/categories/CategoriesLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Grid>
              <Switch>
                <Redirect exact from="/" to="/dashboard"/>
                <Route path="/dashboard" component={ DashboardLayout } />
                <Route path="/transactions" component={ TransactionsLayout } />
                <Route path="/categories" component={ CategoriesLayout } />
              </Switch>
            </Grid>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
