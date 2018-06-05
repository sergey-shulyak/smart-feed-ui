import { takeLatest, takeEvery, call, put, all } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import * as api from '../../api/userApi';
import * as actions from './LoginFormActions';

export function* sendLoginData({ payload = {} }) {
    const { email, password } = payload;

    const loginData = {
        credentials: btoa(`${email}:${password}`)
    };

    try {
        const { data: userData } = yield call(api.logIn, loginData);
        yield put(actions.saveUserData(userData));
        yield put(replace('/feed'))
    } catch (error) {
        console.error('ERROR', error)
    }
}

export function* clearUserData({ payload = {} }) {
    // cookies.remove('accessToken', { path: 'localhost' }); //TODO доделать это
    // console.log('cook', cookies.get());
    yield call(api.logout);
    // yield put(replace('/'))
}

export default function* () {
    yield all([
        takeLatest(actions.LOGIN_SEND_DATA, sendLoginData),
        takeEvery(actions.CLEAR_USER_DATA, clearUserData)
    ]);
}
