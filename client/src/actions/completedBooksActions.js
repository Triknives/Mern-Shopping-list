import axios from 'axios';
import { GET_COMPLETED_BOOKS, ADD_COMPLETED_BOOK, DELETE_COMPLETED_BOOK,COMPLETED_BOOKS_LOADING } from '../actions/types';

export const getCompletedBooks = () => dispatch => {
  dispatch(setCompletedBooksLoading());
  axios.get('/api/completedBooks').then(res => {

    dispatch({
      type: GET_COMPLETED_BOOKS,
      payload: res.data
    });
    console.log(res.data);
  }
  )
};

export const addCompletedBooks = (completed) => dispatch => {
  axios.post('/api/completedBooks', completed).then(res =>
    dispatch({
      type: ADD_COMPLETED_BOOK,
      payload: res.data
    })
  )
};

export const deleteCompletedBook = (id) => dispatch => {
  axios.delete(`/api/completedBooks/${id}`).then(res =>
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
