import React, { Component } from 'react';
import DataTable from 'react-data-table-component'
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



class ExpenseLog extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    console.log(this.props)
    const data = this.props.expItems
    const columns = [
      {name: 'Date', selector: 'date'},
      {name: 'Category ID', selector: 'category_id'},
      {name: 'Description', selector: 'description'},
      {name: 'Amount', selector: 'amount'}
    ]
    return(
      <div className='section'>
        <DataTable 
          title='Expense Log'
          data={data}
          columns={columns}  
        />
        <Link to={'/'}>
          <button type='button'>Return Home</button>
        </Link>
      </div>
    )
  }
}

export default withRouter(ExpenseLog);