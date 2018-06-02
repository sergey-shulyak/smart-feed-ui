import { handleActions } from 'redux-actions';
import { saveFeedData, clearFeedData } from './FeedPageActions';

const defaultState = [];

const feedReducer = handleActions({
    [saveFeedData]: (state, { payload: feedData }) => feedData,
    [clearFeedData]: (state, action) => defaultState
}, defaultState);

export default feedReducer;
