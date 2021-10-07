import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
 
 
 return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className='expense-item'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
