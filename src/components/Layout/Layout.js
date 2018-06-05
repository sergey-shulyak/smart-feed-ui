import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ApplicationToolbar from '../ApplicationToolbar/ApplicationToolbar';

const styles = {
    root: {
        flexGrow: 1,
    }
}

class Layout extends React.PureComponent {
    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ApplicationToolbar onSearch={this.handleSearch}/>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(Layout);
