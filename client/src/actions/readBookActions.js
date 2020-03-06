import axios from 'axios';
import { GET_READBOOKS, ADD_READ_BOOK, DELETE_READ_BOOK, READ_BOOKS_LOADING } from '../actions/types';

export const getReadBooks = () => dispatch =>  {
  dispatch(setReadBooksLoading());
  axios.get('/api/readBooks').then(res =>

    dispatch({
      type: GET_READBOOKS,
      payload: res.data
    })
  )
};
export const addReadBook = (readBook) => dispatch => {
  axios.post('/api/readBooks', readBook).then(res =>
    dispatch({
      type: ADD_READ_BOOK,
      payload: res.data
    })
  )
};

export const deleteReadBook = (id) => dispatch => {
  axios.delete(`/api/readBooks/${id}`).then(res =>
    dispatch({
      type:DELETE_READ_BOOK,
      payload: id,
    })
  )
};

export const setReadBooksLoading = () => {
  return {
    type: READ_BOOKS_LOADING
  }
};
