import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ExpenseCategories from './ExpenseCategories.jsx';
import IncomeCategories from './IncomeCategories.jsx';
import SavingsCategories from './SavingsCategories.jsx'
import ExpenseLog from './ExpenseLog.jsx';
import IncomeLog from './IncomeLog.jsx';
import SavingsLog from './SavingsLog.jsx';
import LogExpense from './LogExpense.jsx';
import LogIncome from './LogIncome.jsx';
import LogSavings from './LogSavings.jsx';
import AddExpenseCategory from './AddExpenseCategory.jsx';
import AddIncomeCategory from './AddIncomeCategory.jsx';
import AddSavingsCategory from './AddSavingsCategory.jsx';


class App extends Component {
  
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    fetch('http://localhost:8080/items/expense')
      .then(res => res.json())
      .then(result => {
        this.setState({
          expItems: result
        });
      }).then(() => {
        fetch('http://localhost:8080/items/income')
        .then(res => res.json())
        .then(result => {
          this.setState({
            incItems: result
          });
      })}).then(() => {
        fetch('http://localhost:8080/items/savings')
        .then(res => res.json())
        .then(result => {
          this.setState({
            savingsItems: result
          });
        })
      }).then(() => {
        fetch('http://localhost:8080/categories/expense')
        .then(res => res.json())
        .then(result => {
          this.setState({
            expCategories: result
          });
        })
      }).then(() => {
        fetch('http://localhost:8080/categories/income')
        .then(res => res.json())
        .then(result => {
          this.setState({
            incCategories: result
          });
        })
      }).then(() => {
        fetch('http://localhost:8080/categories/savings')
        .then(res => res.json())
        .then(result => {
          this.setState({
            savingsCategories: result,
            isLoaded: true,
          });
        })
      }).catch((err) => {console.log(err)})
  }

  render() {
    const { isLoaded, expCategories, incCategories, savingsCategories, expItems, incItems, savingsItems } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="router">
          <main>
            <Switch>
              <Route exact path='/'>
                <div className='section'>
                  <ExpenseCategories expCategories={expCategories}/>
                </div>
                <br/>
                <div className='section'>
                  <IncomeCategories incCategories={incCategories}/>
                </div>
                <br/>
                <div className='section'>
                  <SavingsCategories savingsCategories={savingsCategories}/>
                </div>   
              </Route>
              <Route path='/viewexpenses'>
                <ExpenseLog expItems={expItems}/>
              </Route>
              <Route path='/viewincome'>
                <IncomeLog incItems={incItems}/>
              </Route>
              <Route path='/viewsavings'>
                <SavingsLog savingsItems={savingsItems}/>
              </Route>
              <Route path='/logexpense'>
                <LogExpense />
              </Route>
              <Route path='/logincome'>
                <LogIncome />
              </Route>
              <Route path='/logcontribution'>
                <LogSavings />
              </Route>
              <Route path='/addexpensecategory'>
                <AddExpenseCategory />
              </Route>
              <Route path='/addincomecategory'>
                <AddIncomeCategory />
              </Route>
              <Route path='/addsavingscategory'>
                <AddSavingsCategory />
              </Route>
            </Switch>

          </main>
        </div>
      )
    }
  };
};

export default App;