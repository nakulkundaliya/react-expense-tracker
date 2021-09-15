import {
  ADD_EXPENSE_SUCCESS,
  DELETE_EXPENSE_SUCCESS,
  GET_EXPENSES_SUCCESS,
} from '../actions/types';

const initialState = { data: [] };

const ExpenseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log('===payload', payload);
  switch (type) {
    case ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        addExpense: payload,
      };

    case GET_EXPENSES_SUCCESS:
      return {
        data: [...payload],
      };
    case DELETE_EXPENSE_SUCCESS:
      const deletedData = state.data.filter(
        (expense) => expense.id !== payload
      );
      return {
        data: deletedData,
      };

    default:
      return state;
  }
};

export default ExpenseReducer;
