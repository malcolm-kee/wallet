import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderContainer from "./components/HeaderContainer";

import SummaryContainer from "./scenes/Summary/SummaryContainer";
import AddExpenseFormContainer from "./scenes/Expense/AddExpenseFormContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
