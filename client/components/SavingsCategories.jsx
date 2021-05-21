import React, { Component } from 'react';
import DataTable from 'react-data-table-component'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class SavingsCategories extends Component {
  render() {

    const columns = [
      {name: 'Goal Name', selector: 'category_name'},
      {name: 'Goal Amount', selector: 'budget_amount'},
      {name: 'Amount Saved'}
    ]
    const data = this.props.savingsCategories

    return( 
      <div>        
        <DataTable 
          title='Savings'
          data={data}
          columns={columns}
        />
        <div className='buttons'>
        <Link to={'/addsavingscategory'}>
          <button type='button'>Add Category</button>
        </Link>        
        <Link to={'/logcontribution'}>
          <button type='button'>Log Contribution</button>
        </Link>
        <Link to={'/viewsavings'}>
          <button type='button'>View All Contributions</button>
        </Link>
        </div>
      </div>

    )
  }
}

export default SavingsCategories;