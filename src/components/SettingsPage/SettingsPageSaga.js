import {takeLatest, takeEvery, call, put, all, select} from 'redux-saga/effects';

import * as userApi from '../../api/userApi';
import * as categoryApi from '../../api/categoriesApi';
import * as actions from './SettingsPageActions';
import {saveCategories} from "./SettingsPageActions";
import {saveSocialIntegrations} from "./SettingsPageActions";
import {saveUserData} from "../LoginForm/LoginFormActions";

export function* fetchCategories(userId) {
    try {
        const {data: allCategories} = yield call(categoryApi.fetchAllCategories);
        const {data: userCategories} = yield call(userApi.fetchCategories, userId);

        const mappedCategories = allCategories.map(cat => {
            return {...cat, isEnabled: Boolean(userCategories.find(c => c.id === cat.id)) || false}
        });

        yield put(saveCategories(mappedCategories));
    } catch (error) {
        console.error(error);
    }
}

export function* fetchSocialIntegrations(userId) {
    const allIntegrations = [
        {id: 1, type: 'twitter'},
        {id: 2, type: 'facebook'},
        {id: 3, type: 'medium'}
    ];

    try {
        const {data: userIntegrations} = yield call(userApi.fetchIntegrations, userId);

        const mappedIntegrations = allIntegrations.map(integration => {
            return {
                ...integration,
                isEnabled: Boolean(userIntegrations.find(i => i.type === integration.type)) || false
            }
        });

        yield put(saveSocialIntegrations(mappedIntegrations));
    } catch (error) {
        console.error(error);
    }
}

export function* fetchSettings() {
    const {data: userData} = yield call(userApi.relogin);
    yield put(saveUserData(userData));

    yield call(fetchCategories, userData.id);
    yield call(fetchSocialIntegrations, userData.id);
}

export function* addUserCategory(action) {
    const user = yield select(state => state.User.user);
    const categoryId = action.payload;

    try {
        yield call(categoryApi.addUserCategory, user.id, categoryId)
        yield call(fetchCategories, user.id);
    } catch (e) {
        console.error(e);
    }
}


export function* removeUserCategory(action) {
    const user = yield select(state => state.User.user);
    console.log("USER", user);
    const categoryId = action.payload;

    try {
        yield call(categoryApi.removeUserCategory, user.id, categoryId)
        yield call(fetchCategories, user.id);
    } catch (e) {
        console.error(e);
    }
}


export default function* () {
    yield all([
        takeLatest(actions.FETCH_SETTINGS, fetchSettings),
        takeLatest(actions.ADD_USER_CATEGORY, addUserCategory),
        takeLatest(actions.REMOVE_USER_CATEGORY, removeUserCategory)
    ]);
}
