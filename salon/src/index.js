import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { useSelector, useDispatch } from "react-redux";

import Login from './component/login'
// import Sigup from './sigup'
import Table from './component/table'
import From from './component/from'
import Edit from './component/edit'
import { store, persistor } from './store/storeReducer'
import { logOut } from './store/action'

function PrivateRoute({ path, component, type }) {
  const auth = useSelector(state => state.auth);
  const { name } = auth
  return (
    <Route
      render={({ location }) =>
        name.length ?
          <Route path={path} component={component} type={type} /> : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function Routers() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const { name } = auth

  const keluar = () => {
    dispatch(logOut())
    return <Redirect to={{ pathname: "/login" }} />
  }

  useEffect(() => {
    if (name.length) {
      <Redirect to={{ pathname: "/login" }} />
    } else {
      <Redirect to={{ pathname: "/" }} />
    }
  })

  return (
    <div>
      <nav aria-label="breadcrumb" className="bg-primary">
        <ol className="breadcrumb bg-primary row d-flex justify-content-between p-10">
          <li className="breadcrumb-item pt-2 text-light">Salon</li>
          {name.length ? <li className="breadcrumb-item btn btn-danger" onClick={keluar}>Log Out</li> : null}
        </ol>
      </nav>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin" component={() => Table({ type: "admin" })} />
            <PrivateRoute path="/user" component={() => Table({ type: "user" })} />
            <PrivateRoute path="/edit/:id" component={() => Edit({ type: "edit" })} />
            <PrivateRoute path="/new" component={() => Edit({ type: "new" })} />
            <PrivateRoute path="/from/:id" component={From} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>

  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
