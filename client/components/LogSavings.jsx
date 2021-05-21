import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { useForm } from "react-hook-form"


const LogSavings = () => {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm();

  const onSubmit = (data) => {
    const { date, amount, category_name, description } = data;
    console.log(data);
    fetch(`http://localhost:8080/items/savings?category_name=${category_name}&amount=${amount}&date=${date}&description=${description}`, {
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
      <h2>Log Some Savings</h2>      
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Date</label>
        <input id='savingsDate' autocomplete='off' type='text' {...register('date')}></input>
        <label>Category Name</label>
        <input id='savingsName' autocomplete='off' type='text' {...register('category_name')}></input>
        <label>Description</label>
        <input id='savingsDescription' autocomplete='off' type='text' {...register('description')}></input>
        <label>Amount</label>
        <input id='savingsAmount' autocomplete='off' type='text' {...register('amount')}></input>
        <input type="submit"/>
      </form>
      <Link to={'/'}>
        <button type='button'>Return Home</button>
      </Link>
    </div>

  )
}

export default LogSavings