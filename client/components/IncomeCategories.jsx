import React, { Component } from 'react';
import DataTable from 'react-data-table-component'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



class IncomeCategories extends Component {
  render() {
    const columns = [
      {name: 'Category', selector: 'category_name'},
      {name: 'Expected Amount', selector: 'budget_amount'},
      {name: 'Amount Earned'}
    ]
    const data = this.props.incCategories
    return( 
      <div>
        <DataTable 
          title='Income Categories'
          data={data}
          columns={columns}
        />
        <Link to={'/addincomecategory'}>
          <button type='button'>Add Category</button>
        </Link>        
        <Link to={'/logincome'}>
          <button type='button'>Log Income</button>
        </Link>
        <Link to={'/viewincome'}>
          <button type='button'>View All Income</button>
        </Link>
      </div>

    )
  }
}

export default IncomeCategories;