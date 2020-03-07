import import { GET_GOALS, ADD_GOAL, DELETE_GOAL, GOALS_LOADING } from '../actions/types';

const initialState = {
  goals: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_GOALS:
    return {
      ...state,
      goals: action.payload,
      loading: false
    };
    case ADD_REVIEW:
    return{
      ...state,
      goals: [action.payload, ...state.goals]
    };
    case DELETE_REVIEW:
      return {
        ...state,
          goals: state.goals.filter(goal => goal._id !== action.payload)
        };
    case REVIEWS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
