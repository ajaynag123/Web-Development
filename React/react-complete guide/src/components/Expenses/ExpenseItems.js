import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import React,{useState} from "react";

const ExpenseItems = (props) => {
 const clickHandler = () =>{
   console.log('Clicked');
 }
 
 return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className='expense-item'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItems;
