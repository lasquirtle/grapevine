import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DataTable from 'react-data-table-component'


class ExpenseCategories extends Component {
  render() {
    const columns = [{name: 'Category', selector: 'category_name'},{name: 'Amount Budgeted', selector: 'budget_amount'}, {name: 'Amount Spent'}]
    const data = this.props.expCategories
    return( 
      <div>
        <DataTable 
        title='Expenses'
        data={data}
        columns={columns}
        />
        <div className='buttons'>
        <Link to={'/addexpensecategory'}>
          <button type='button'>Add Category</button>
        </Link>
        <Link to={'/logexpense'}>
          <button type='button'>Log Expense</button>
        </Link>        
        <Link to={'/viewexpenses'}>
          <button type='button'>View All Expenses</button>
        </Link>
        </div>
      </div>

    )
  }
}

export default ExpenseCategories;