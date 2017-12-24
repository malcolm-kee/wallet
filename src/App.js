import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./config/store";
import { listenToAuthChanges } from "./actions/auth";

import HeaderContainer from "./components/HeaderContainer";
import SummaryContainer from "./scenes/Summary/SummaryContainer";
import AddExpenseFormContainer from "./scenes/Expense/components/AddExpenseFormContainer";

store.dispatch(listenToAuthChanges());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <HeaderContainer />
            <Switch>
              <Route exact path="/" component={SummaryContainer} />
              <Route
                exact
                path="/expense/add"
                component={AddExpenseFormContainer}
              />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
