import React from 'react';
import Typography from '@material-ui/core/Typography'

import styles from './HomePage.css'

class HomePage extends React.PureComponent {
    render() {
        return (
            <div className={styles.homePage}>
                <Typography variant="display4">Smart Feed</Typography>
            </div>
        )
    }
}

export default HomePage;