import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';


export default combineReducers({
  item: itemReducer,
  review: reviewReducer,
});
