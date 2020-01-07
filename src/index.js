import React from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom"

import Guest from "views/Guest.js"
import Garage from "views/Garage.js"
import Admin from "views/Admin.js"

var hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/garage" component={Garage} />
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Guest} />
    </Switch>
  </Router>,
  document.getElementById("root")
)
