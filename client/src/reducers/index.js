import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';
import completedBooksReducer from './completedBooksReducer';


export default combineReducers({
  item: itemReducer,
  review: reviewReducer,
  completedBooks: completedBooksReducer,
});
