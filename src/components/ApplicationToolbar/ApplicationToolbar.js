import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/Settings';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';

import { clearUserData } from '../LoginForm/LoginFormActions';

const styles = theme => ({
    flex: {
        flex: 1,
        textAlign: 'center'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    textField: {
        margin: theme.spacing.unit,
        color: 'white'
    },
    userName: {
        color: 'white',
        display: 'inline-block'
    }
});

class ApplicationToolbar extends React.PureComponent {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    // handleLogOut = () => {
        // this.props.clearUserData();
    // };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <Link to="/feed">Smart Feed</Link>
                    </Typography>
                    <div>
                        <Typography variant="body2" className={classes.userName}>{this.props.user.fullName}</Typography>
                        <IconButton
                            aria-owns="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <Settings />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <Link to="/settings">
                                <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                            </Link>
                            <a href="http://localhost:3000/logout">
                            <MenuItem onClick={this.handleLogOut}>Log out</MenuItem>
                            </a>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.User.user
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        clearUserData: () => dispatch(clearUserData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ApplicationToolbar));
