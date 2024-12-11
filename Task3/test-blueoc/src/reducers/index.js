import { combineReducers } from 'redux';
import { 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS, 
  FETCH_POSTS_FAILURE 
} from '../actions/PostAction';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer
});