import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';
import bookReducer from './bookReducer';


export default combineReducers({
  item: itemReducer,
  review: reviewReducer,
  book: bookReducer,
});
