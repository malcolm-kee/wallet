import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./config/store";
import { getAuthInitialState } from "./actions/auth";

import HeaderContainer from "./components/HeaderContainer";
import Home from "./components/Home";
import Landing from "./components/Landing";

import EnsureLoggedInContainer from "./components/EnsureLoggedInContainer";
import LoginContainer from "./scenes/Auth/components/LoginContainer";

store.dispatch(getAuthInitialState());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <HeaderContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/landing" component={Landing} />
              <Route component={EnsureLoggedInContainer} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
