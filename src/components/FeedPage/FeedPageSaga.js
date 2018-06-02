import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux'

import * as api from '../../api/feedApi';
import * as actions from './FeedPageActions';

export function* fetchFeed({ payload = {} }) {
    try {
        const user = yield select(state => state.User);
        //fetch filters
        const { data } = yield call(api.fetchFeed, user.id);
        yield put(actions.saveFeedData(data.feed)); //TODO изменить с новой апи
    } catch (error) {
        console.error(error);
    }
}

export function* fetchFilters() {
    // const user = yield select(state => state.User);
    // const { data } = yield call(api.fetchFeed, user.id);
    // yield put(actions.saveFeedData(data.feed)); //TODO изменить с новой апи
}

export default function* () {
    yield all([
        takeEvery(actions.FETCH_FEED, fetchFeed),
        // takeEvery(LOCATION_CHANGE, locationChange)
    ]);
}
