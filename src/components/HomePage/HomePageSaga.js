import { takeLatest, takeEvery, call, put, all } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import * as api from '../../api/userApi';
import * as actions from './HomePageActions';
import { saveUserData } from '../LoginForm/LoginFormActions';

export function* relogin() {
    try {
        const { data: userData } = yield call(api.relogin);
        yield put(saveUserData(userData))
        yield put(replace('/feed'))
    } catch (error) {
        console.error(error);
    }
}


export default function* () {
    yield all([
        takeLatest(actions.RELOGIN, relogin)
    ]);
}
