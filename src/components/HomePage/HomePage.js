import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './HomePage.css'

class HomePage extends React.PureComponent {
    render() {
        return (
            <div className={styles.homePage}>
                <Typography variant="display4">Smart Feed</Typography>
                <Typography variant="headline">Your personal social feed</Typography>

                <div className={styles.homePageButtonContainer}>
                    <Button>Sign in</Button>
                    <Button>Register</Button>
                </div>
            </div>
        )
    }
}

export default HomePage;