import { combineReducers } from 'redux'
import { SELECT_SUBREDDIT, SUCCESS_SEARCH, SET_LOADING } from '../actions'

const INITIAL_STATE = {
	selectedSubreddit: '',
	posts: [],
	isLoading: false,
	}

  const selectSubredditReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          isLoading: true,
        }
      case SELECT_SUBREDDIT:
        return {
          ...state,
          selectedSubreddit: action.subreddit,
          isLoading: true,
        }
      case SUCCESS_SEARCH:
        return {
          ...state,
          posts: action.posts,
          isLoading: false,
        }
      default:
        return state;
    }
  }

  const rootReducer = combineReducers({
    subreddit: selectSubredditReducer,
  })

export default rootReducer;