import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const expenses = props.expenses;
  const expenseFilterHandler = (expenseFiltered) => {
    console.log("expense.js =>>>>", expenseFiltered);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onExpenseFilter={expenseFilterHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].title}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].title}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].title}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].title}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
