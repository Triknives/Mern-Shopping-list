import axios from 'axios';
import { GET_COMPLETED_BOOKS, ADD_COMPLETED_BOOK, DELETE_COMPLETED_BOOK,COMPLETED_BOOKS_LOADING } from '../actions/types';


export const getCompletedBooks = () => dispatch =>  {
  dispatch(setCompletedBooksLoading());
  axios.get('/api/completedBook').then(res =>

    dispatch({
      type: GET_COMPLETED_BOOKS,
      payload: res.data
    })
  )
};

export const addCompletedBook = (completedBook) => dispatch => {
  axios.post('/api/completedBook', completedBook).then(res =>
    dispatch({
      type: ADD_COMPLETED_BOOK,
      payload: res.data
    })
  )
};

export const deleteCompletedBook = (id) => dispatch => {
  axios.delete(`/api/completedBook/${id}`).then(res =>
    dispatch({
      type:DELETE_COMPLETED_BOOK,
      payload: id,
    })
  )
};

export const setCompletedBooksLoading = () => {
  return {
    type: COMPLETED_BOOKS_LOADING
  }
};
