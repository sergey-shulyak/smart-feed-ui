import { combineReducers } from 'redux';

import { loginFormReducer } from '../components/LoginForm';
import { settingsPageReducer } from '../components/SettingsPage';
import { feedPageReducer } from '../components/FeedPage';
import { publicationReducer } from '../components/PublicationPage';

export default combineReducers({
    User: combineReducers({ user: loginFormReducer, settings: settingsPageReducer}),
    Feed: feedPageReducer,
    Publication: publicationReducer
})
