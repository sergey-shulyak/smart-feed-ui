import { combineReducers } from 'redux';

import { loginFormReducer } from '../components/LoginForm'
import { feedPageReducer } from '../components/FeedPage'

export default combineReducers({
    User: loginFormReducer,
    Feed: feedPageReducer
})
