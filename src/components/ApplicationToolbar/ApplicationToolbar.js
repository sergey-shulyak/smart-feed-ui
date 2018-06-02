import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, MuiThemeProvider } from '@material-ui/core';

import theme from '../theme'

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

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <Link to="/feed">Smart Feed</Link>
                    </Typography>
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            id="name"
                            className={classes.textField}
                            label="Search"
                            value={this.state.name}
                            color="inherit"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }} />
                    </MuiThemeProvider>
                    <div>
                        <IconButton
                            aria-owns="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
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
                            <Link to="/">
                                <MenuItem onClick={this.handleClose}>Log out</MenuItem>
                            </Link>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(ApplicationToolbar);
