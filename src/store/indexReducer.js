import {combineReducers} from 'redux';

import {homePageReducer} from '../components/HomePage'

export default combineReducers({
    HomePage: homePageReducer
})