import { combineReducers } from 'redux';
import ExpenseReducer from './ExpenseReducer';

const rootReducer = combineReducers({
  expenses: ExpenseReducer
});

export default rootReducer;
