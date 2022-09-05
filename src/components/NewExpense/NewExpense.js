import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseFormHandler = (newExpense) => {
    props.onNewExpense({ ...newExpense, id: 1990 });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={expenseFormHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
