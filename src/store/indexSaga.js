import { all } from 'redux-saga/effects';

import { loginFormSaga } from '../components/LoginForm';
import { registrationFormSaga } from '../components/RegistrationForm';
import { feedPageSaga } from '../components/FeedPage';
import { homePageSaga } from '../components/HomePage';

export default function* rootSaga() {
    yield all([
        loginFormSaga(),
        registrationFormSaga(),
        homePageSaga(),
        feedPageSaga()
    ])
}