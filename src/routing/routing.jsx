import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Admin from '../pages/admin'
import Partners from '../pages/partners'
import Questions from '../pages/questions'

const DEFAULT_ROUTE = "/questions"

const AppRouter = () => (
  <Switch>
    <Route path="/admin" component={Admin} exact={true} />
    <Route path="/partners" component={Partners} exact={true} />
    <Route path="/questions" component={Questions} exact={true} />
    <Redirect exact from="/" to={DEFAULT_ROUTE} />
  </Switch>
)

export default AppRouter