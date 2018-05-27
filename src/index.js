import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import store from './store';
import {AppRouter} from './router'

import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
