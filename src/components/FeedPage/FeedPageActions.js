import { createAction } from 'redux-actions';

export const FETCH_FEED = 'FETCH_FEED';
export const SAVE_FEED_DATA = 'SAVE_FEED_DATA';
export const CLEAR_FEED_DATA = 'CLEAR_FEED_DATA';

export const fetchFeed = createAction(FETCH_FEED);
export const saveFeedData = createAction(SAVE_FEED_DATA);
export const clearFeedData = createAction(CLEAR_FEED_DATA);

