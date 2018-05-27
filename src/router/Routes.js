import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {HomePage} from '../components/HomePage'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            {/*<Route path='/about' component={<div>about</div>}/>*/}
            {/*<Route path='/contact' component={<div>contact</div>}/>*/}
        </Switch>
    );
}

export default Routes;