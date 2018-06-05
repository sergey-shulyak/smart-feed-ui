import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux'

import * as api from '../../api/feedApi';
import * as actions from './FeedPageActions';
import * as userApi from "../../api/userApi";
import {saveUserData} from "../LoginForm/LoginFormActions";
import * as categoryApi from "../../api/categoriesApi";
import {saveFilters} from "./FeedPageActions";

export function* fetchFeedPublications(userId) {
    try {
        const { data } = yield call(api.fetchFeed, userId);
        yield put(actions.saveFeedData(data));
    } catch (error) {
        console.error(error);
    }
}

export function* fetchFeedByCategory({ payload: categoryName }) {
    try {
        const user = yield select(state => state.User.user);
        const { data } = yield call(api.fetchFeedByCategory, user.id, categoryName);

        yield put(actions.clearFeedData());
        yield put(actions.saveFeedData(data));
    } catch (error) {
        console.error(error);
    }
}

export function* fetchFilters(userId) {
    try {
        const {data: filters} = yield call(userApi.fetchCategories, userId);

        yield put(saveFilters(filters));
    } catch (error) {
        console.error(error);
    }
}

export function* fetchFeed() {
    try {
        const {data: userData} = yield call(userApi.relogin);
        yield put(saveUserData(userData));

        yield call(fetchFeedPublications, userData.id);
        yield call(fetchFilters, userData.id)
    } catch (error) {
        console.error(error);
    }
}

export default function* () {
    yield all([
        takeEvery(actions.FETCH_FEED, fetchFeed),
        takeEvery(actions.FETCH_FEED_CATEGORY, fetchFeedByCategory)
    ]);
}
