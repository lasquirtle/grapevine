import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from './Table.jsx';

class App extends Component {
  render() {
    return(
      <div className="App">
      <h1>this is a react component</h1>
      <Router>
        <Switch>
          <Route path="/" component={Table} />
        </Switch>
        <Switch>
          <Route path="/categories/expense" component={Table} />
        </Switch>
      </Router>

    </div>
    );
  };
};

export default App;