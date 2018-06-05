import { all } from 'redux-saga/effects';

import { loginFormSaga } from '../components/LoginForm';
import { registrationFormSaga } from '../components/RegistrationForm';
import { feedPageSaga } from '../components/FeedPage';
import { homePageSaga } from '../components/HomePage';
import {settingsPageSaga} from "../components/SettingsPage";
import {publicationSaga} from "../components/PublicationPage";

export default function* rootSaga() {
    yield all([
        loginFormSaga(),
        registrationFormSaga(),
        homePageSaga(),
        feedPageSaga(),
        settingsPageSaga(),
        publicationSaga()
    ])
}