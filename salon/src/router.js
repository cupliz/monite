import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import Login from './login'
// import Sigup from './sigup'
import Admin from './admin'
import User from './user'
import Reducer from './reducer'

const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function PrivateRoute({ path, component }) {
    const auth = localStorage.getItem("auth")
    return (
        <Route
            render={({ location }) =>
                auth ?
                    <Route path={path} component={component} /> : (
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

export default function index() {
    const auth = localStorage.getItem("auth")
    if (!auth) {
        <Redirect to={{ pathname: "/login" }} />
    }
    return (
        <header style={{ height: 50, width: "100%", backgroundColor: "blue" }}>
            <div className="container">
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route path="/login" component={Login} />
                            <PrivateRoute path="/" component={auth === "admin" ? Admin : User} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        </header>
    );
}