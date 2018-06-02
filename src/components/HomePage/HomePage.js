import React from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';

import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

import styles from './HomePage.css'
import { relogin } from './HomePageActions';


class HomePage extends React.PureComponent {
    componentDidMount() {
        this.props.tryLogin()
    }

    render() {
        return (
            <div className={styles.homePage}>
                <Typography variant="display4">Smart Feed</Typography>
                <Typography variant="headline">Your personal social feed</Typography>

                <div className={styles.homePageButtonContainer}>
                    <LoginForm />
                    <RegistrationForm />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        tryLogin: () => dispatch(relogin())
    }
}

export default connect(() => ({}), mapDispatchToProps)(HomePage);