import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import reducers from './indexReducer';
import saga from './indexSaga';
import {isInDevelopment} from "../utils/envUtils";

// Middleware setup
export const history = createHistory();
const router = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(router, sagaMiddleware);

// if (isInDevelopment()) {
    // console.log('IN DEVELOPMENT')
    middleware = composeWithDevTools(middleware);
// }

const INITIAL_STATE = {};
const store = createStore(
    reducers,
    INITIAL_STATE,
    middleware
);

sagaMiddleware.run(saga);

export default store;
