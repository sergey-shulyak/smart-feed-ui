import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { registrationSendData } from './RegistrationFormActions';

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


class RegistrationForm extends React.Component {
    state = {
        open: false,
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
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

    handleRegister = () => {
        const { email, password, confirmPassword, fullName } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        this.props.sendRegisterData(email, password, fullName);

        // this.props.sendLoginData(email, password);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Register</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Register</DialogTitle>
                    <DialogContent>
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
                        <TextField
                            name="confirmPassword"
                            margin="dense"
                            label="Confirm password"
                            type="password"
                            fullWidth
                            onChange={this.handleTextChange} />
                        <TextField
                            name="fullName"
                            margin="dense"
                            label="Your name"
                            fullWidth
                            onChange={this.handleTextChange} />
                        <Button className={classNames(classes.button)} disabled variant="raised" size="small">
                            Continue with Google+
                        </Button>
                        <Button className={classes.button} disabled variant="raised" size="small">
                            Continue with Facebook
                        </Button>
                        <a href="http://localhost:3000/auth/twitter">
                            <Button className={classNames(classes.button)} variant="raised" color="primary" size="small">
                                Continue with Twitter
                            </Button>
                        </a>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary"> Cancel </Button>
                        <Button onClick={this.handleRegister} color="primary"> Register </Button>
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

        sendRegisterData: (email, password, fullName) => dispatch(registrationSendData({ email, password, fullName }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegistrationForm));