import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';
import completedBookReducer from './completedBookReducer';


export default combineReducers({
  item: itemReducer,
  review: reviewReducer,
  completedBooks: completedBookReducer,
});
