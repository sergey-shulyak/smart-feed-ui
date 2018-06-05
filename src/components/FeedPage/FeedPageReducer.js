import { handleActions } from 'redux-actions';
import { saveFeedData, clearFeedData, saveFilters } from './FeedPageActions';

const defaultState = {};

const feedReducer = handleActions({
    [saveFeedData]: (state, { payload: publications }) => ({...state, publications}),
    [saveFilters]: (state, {payload: filters}) => ({...state, filters}),
    [clearFeedData]: (state, action) => ({...state, publications: []})
}, defaultState);

export default feedReducer;
