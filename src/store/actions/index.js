import { ApiRequest } from '../../services/api';
import {
  ADD_EXPENSE_SUCCESS,
  DELETE_EXPENSE_SUCCESS,
  GET_EXPENSES_SUCCESS
} from './types';

const BASE_URL = 'http://localhost:8000/expenses';

export const addExpense = (data) => {
  return async (dispatch) => {
    let url = `${BASE_URL}`;
    const config = {
      url: url,
      method: 'POST',
      body: JSON.stringify(data)
    };
    const response = await ApiRequest(config);
    if (response) {
      dispatch(getExpenses());
      dispatch({ type: ADD_EXPENSE_SUCCESS, payload: 'Created Succesfully' });
    }
  };
};

export const getExpenses = () => {
  return async (dispatch) => {
    let url = `${BASE_URL}`;
    const config = {
      url: url,
      method: 'GET'
    };
    const response = await ApiRequest(config);
    if (response) {
      dispatch({ type: GET_EXPENSES_SUCCESS, payload: response });
    }
  };
};

export const deleteExpense = (deleteId) => {
  return async (dispatch) => {
    let url = `${BASE_URL}/${deleteId}`;
    const config = {
      url: url,
      method: 'DELETE'
    };
    const response = await ApiRequest(config);
    if (response) {
      dispatch({ type: DELETE_EXPENSE_SUCCESS, payload: deleteId });
    }
  };
};
