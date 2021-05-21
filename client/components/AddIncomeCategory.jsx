import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { useForm } from "react-hook-form"


const AddIncomeCategory = () => {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm();

  const onSubmit = (data) => {
    const { category_name, budget_amount } = data;
    console.log(data);
    fetch(`http://localhost:8080/categories/income?category_name=${category_name}&budget_amount=${budget_amount}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
    }).then(() => {
      window.location = 'http://localhost:8080'
    }).catch((err) => {console.log(err)})
  }

  return(
    <div className='section'>
      <h2>Add Income Category</h2>      
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Category Name</label>
        <input id='savingsName' autocomplete='off' type='text' {...register('category_name')}></input>
        <label>Budget Amount</label>
        <input id='budgetAmount' autocomplete='off' type='text' {...register('budget_amount')}></input>
        <input type="submit"/>
      </form>
      <Link to={'/'}>
        <button type='button'>Return Home</button>
      </Link>
    </div>

  )
}

export default AddIncomeCategory