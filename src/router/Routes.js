import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {HomePage} from '../components/HomePage'
import {FeedPage} from '../components/FeedPage'
import {PublicationPage} from '../components/PublicationPage'
import {SettingsPage} from '../components/SettingsPage'
import {Layout} from '../components/Layout';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Layout>
                <Switch>
                    <Route exact path='/feed' component={FeedPage}/>
                    <Route path='/feed/:publicationId' component={PublicationPage}/>
                    <Route path='/settings' component={SettingsPage}/>
                </Switch>
            </Layout>
        </Switch>
    );
}

export default Routes;