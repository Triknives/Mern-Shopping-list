import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';
import readBooksReducer from './readBooksReducer';


export default combineReducers({
  item: itemReducer,
  review: reviewReducer,
  readBooks: readBooksReducer,
});
