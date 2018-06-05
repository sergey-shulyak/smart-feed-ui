import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { connect } from 'react-redux';

import { loginSendData } from './LoginFormActions';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    }
});


class LoginForm extends React.Component {
    state = {
        open: false,
        email: '',
        password: ''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleTextChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    handleSignIn = () => {
        const { email, password } = this.state;

        this.props.sendLoginData(email, password);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Sign in</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can sign in with email and password or by using social media account
                        </DialogContentText>
                        <TextField
                            autoFocus
                            name="email"
                            margin="dense"
                            label="Email Address"
                            type="email"
                            fullWidth
                            onChange={this.handleTextChange} />
                        <TextField
                            name="password"
                            margin="dense"
                            label="Password"
                            type="password"
                            fullWidth
                            onChange={this.handleTextChange} />
                        <Button disabled className={classNames(classes.button)} variant="raised" size="small">
                            Sign in with Google+
                        </Button>
                        <Button disabled className={classes.button} variant="raised" size="small">
                            Sign in with Facebook
                        </Button>
                        <a href="http://localhost:3000/auth/twitter">
                            <Button className={classNames(classes.button)} variant="raised" color="primary" size="small">
                                Sign in with Twitter
                            </Button>
                        </a>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary"> Cancel </Button>
                        <Button onClick={this.handleSignIn} color="primary"> Sign in </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {
        sendLoginData: (email, password) => dispatch(loginSendData({ email, password }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm));