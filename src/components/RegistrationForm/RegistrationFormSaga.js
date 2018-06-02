import { takeLatest, takeEvery, call, put, all } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import * as api from '../../api/userApi';

import { saveUserData } from '../LoginForm/LoginFormActions';
import * as actions from './RegistrationFormActions';

export function* registrationSendData({ payload: registrationData = {} }) {
    try {
        console.log('DATA', registrationData);
        const { data: userData } = yield call(api.register, registrationData);
        yield put(saveUserData(userData));
        yield put(replace('/feed'))
    } catch (error) {
        console.error('ERROR', error)
    }
}

export default function* () {
    yield all([
        takeLatest(actions.registrationSendData, registrationSendData)
    ]);
}
