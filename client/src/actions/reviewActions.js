import axios from 'axios';
import { GET_REVIEWS, ADD_REVIEW, DELETE_REVIEW, REVIEWS_LOADING } from './types';

export const getReviews = () => dispatch => {
  dispatch(setReviewsLoading());
  axios.get('/api/reviews').then(res =>
    dispatch({
      type: GET_REVIEWS,
      payload: res.data
    })
  )
};

export const addReview = (review) => dispatch => {
  axios.post('/api/reviews', review).then(res =>
    dispatch({
      type: ADD_REVIEW,
      payload: res.data
    })
  )
};

export const deleteReview = (id) => dispatch => {
  axios.delete(`/api/reviews/${id}`).then(res =>
    dispatch({
      type:DELETE_REVIEW,
      payload: id,
    })
  )
};

export const setReviewsLoading = () => {
  return {
    type: REVIEWS_LOADING
  }
};
