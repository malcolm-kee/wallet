import React from "react";

const AddExpenseForm = props => {
  const { onChange, category, amount } = props;

  return (
    <div className="container">
      <form>
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
        </fieldset>
      </form>
    </div>
  );
};

export default AddExpenseForm;
