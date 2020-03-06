import { GET_READBOOKS, ADD_READ_BOOK, DELETE_READ_BOOK, READ_BOOKS_LOADING } from '../actions/types';

const initialState = {
  readBooks: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_READBOOKS:
    return {
      ...state,
      readBooks: action.payload,
      loading: false
    };
    case ADD_READ_BOOK:
    return{
      ...state,
      readBooks: [action.payload, ...state.readBooks]
    };
    case DELETE_READ_BOOK:
      return {
        ...state,
          readBooks: state.readBooks.filter(readBooks => readBooks._id !== action.payload)
        };
    case READ_BOOKS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
