export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const SUCCESS_SEARCH = 'SUCCESS_SEARCH';
export const FAIL_SEARCH = 'FAIL_SEARCH'
export const SET_LOADING = 'SET_LOADING'

export const selectSubreddit = (subreddit) => ({ type: SELECT_SUBREDDIT, subreddit });
export const succesSearch = (posts) => ({ type: SUCCESS_SEARCH, posts })
export const failSearch = (error) => ({ type: FAIL_SEARCH, error })
export const setLoading = () => ({ type: SET_LOADING })

export function fetchPosts(subreddit) {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const request = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const response = await request.json();
      const { data } = response;
      console.log(data);
      dispatch(succesSearch(data.children));
    } catch(err) {
      dispatch(failSearch(err));
    }
  }
}
