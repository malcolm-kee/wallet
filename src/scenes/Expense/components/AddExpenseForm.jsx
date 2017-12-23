import React from "react";

const AddExpenseForm = props => {
  const { onChange, onSubmit, category, amount, date } = props;

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Add Expense</legend>
          <div className="form-group">
            <label htmlFor="add-expense-category">Category</label>
            <select
              className="form-control"
              id="add-expense-category"
              name="category"
              onChange={onChange}
              value={category}
            >
              <option>Eat/Drink</option>
              <option>Transportation</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="add-expense-amount">Amount</label>
            <input
              name="amount"
              className="form-control"
              type="number"
              step="0.01"
              value={amount}
              id="add-expense-amount"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="add-expense-date">Date</label>
            <input
              className="form-control"
              type="date"
              id="add-expense-date"
              name="date"
              onChange={onChange}
              value={date}
            />
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
