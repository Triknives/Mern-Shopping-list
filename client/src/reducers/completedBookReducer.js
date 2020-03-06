import { GET_COMPLETED_BOOKS, ADD_COMPLETED_BOOK, DELETE_COMPLETED_BOOK, COMPLETED_BOOKS_LOADING } from '../actions/types';

const initialState = {
  completedBooks: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_COMPLETED_BOOKS:
    return {
      ...state,
      completedBooks: action.payload,
      loading: false
    };
    case ADD_COMPLETED_BOOK:
    return{
      ...state,
      completedBooks: [action.payload, ...state.completedBooks]
    };
    case DELETE_COMPLETED_BOOK:
      return {
        ...state,
          completedBooks: state.completedBooks.filter(completedBook => completedBook._id !== action.payload)
        };
    case COMPLETED_BOOKS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
