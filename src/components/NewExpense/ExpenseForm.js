import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <div className="expense_form">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text"></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="1" step="1"></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-01-01"></input>
          </div>
          <div className="new-expense__control">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
