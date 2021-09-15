import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses, addExpense, deleteExpense } from './store/actions';
import { getTotalAmount, isEmpty, monthOptions } from './utils';
import './App.css';
import { Button, InputField } from './components';

const initialData = {
  date: '',
  category: '',
  description: '',
  amount: '',
};

const App = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.data);
  const [expensesList, setExpenesList] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addExpenseData, setAddExpense] = useState(initialData);
  const [month, setMonth] = useState('09');

  useEffect(() => {
    dispatch(getExpenses());
  }, []);

  useEffect(() => {
    setExpenesList(expenses);
    filterMonth();
  }, [expenses, month]);

  const filterMonth = () => {
    const filterByMonth = expenses?.filter(
      (exp) => exp.date.split('-')[1] === month
    );
    setExpenesList(filterByMonth);
  };

  const handleChange = (event) => {
    setAddExpense((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (!isEmpty(addExpenseData)) {
      dispatch(addExpense(addExpenseData));
      setShowAddForm(false);
      setAddExpense(initialData);
    }
  };

  const handleDelete = (deleteId) => {
    dispatch(deleteExpense(deleteId));
  };

  const { date, category, description, amount } = addExpenseData;

  return (
    <div className="app">
      <div className="container">
        <div className="date-container">
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            {monthOptions.map(({ label, value }) => {
              return <option value={value}>{label}</option>;
            })}
          </select>

          <h4>{`$ ${getTotalAmount(expensesList)}`}</h4>
        </div>
        {showAddForm ? (
          <>
            <InputField
              type="date"
              value={date}
              name="date"
              placeholder="date"
              onChange={handleChange}
              required
            />
            <InputField
              type="text"
              value={category}
              name="category"
              placeholder="Category"
              onChange={handleChange}
              required
            />
            <InputField
              type="text"
              value={description}
              name="description"
              placeholder="Description"
              onChange={handleChange}
              required
            />
            <InputField
              type="number"
              value={amount}
              name="amount"
              placeholder="Amount"
              onChange={handleChange}
              required
            />
            <Button onClick={handleSubmit}>Save</Button>
            <Button onClick={() => setShowAddForm(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <Button onClick={() => setShowAddForm(true)}>ADD</Button>
            <table>
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Desc</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
                {expensesList?.map(
                  ({ date, description, category, amount, id }, index) => {
                    return (
                      <tr key={id}>
                        <td>{date}</td>
                        <td>{description}</td>
                        <td>{category}</td>
                        <td>{parseFloat(amount)}</td>
                        <td>
                          <button onClick={() => handleDelete(id)}>
                            DELETE
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
            <div className="empty">
              {expensesList?.length < 1 && <h3>No data</h3>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
