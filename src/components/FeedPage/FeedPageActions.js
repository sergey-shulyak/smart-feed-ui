import { createAction } from 'redux-actions';

export const FETCH_FEED = 'FETCH_FEED';
export const FETCH_FEED_CATEGORY = 'FETCH_FEED_CATEGORY';
export const SAVE_FEED_DATA = 'SAVE_FEED_DATA';
export const CLEAR_FEED_DATA = 'CLEAR_FEED_DATA';

export const SAVE_FILTERS = 'SAVE_FILTERS';

export const fetchFeed = createAction(FETCH_FEED);
export const fetchFeedCategory = createAction(FETCH_FEED_CATEGORY);
export const saveFeedData = createAction(SAVE_FEED_DATA);
export const clearFeedData = createAction(CLEAR_FEED_DATA);
export const saveFilters = createAction(SAVE_FILTERS);

