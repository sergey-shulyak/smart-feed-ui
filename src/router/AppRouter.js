import React from 'react';
import {ConnectedRouter} from 'react-router-redux';

import {history} from '../store'

import Routes from './Routes';

function AppRouter() {
    return (
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
    )
}

export default AppRouter;