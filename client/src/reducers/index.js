import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';
import bookReducer from './bookReducer';
import finishedBookReducer from './finishedBookReducer';
import goalReducer from './goalReducer';


export default combineReducers({
  item: itemReducer,
  review: reviewReducer,
  book: bookReducer,
  finishedBook: finishedBookReducer,
  goals: goalReducer,
});
