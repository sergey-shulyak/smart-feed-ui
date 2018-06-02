import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, TextField, List, ListItem, Checkbox, ListItemText } from '@material-ui/core';

const styles = theme => ({
    root: {
        marginTop: '25px',
        marginLeft: '15%',
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {},
    cardHeader: {
        textAlign: 'center'
    },
    button: {
    },
    avatar: {
        display: 'inline-block',
        margin: 10,
        width: 120,
        height: 120,
        verticalAlign: 'middle'
    },
});

class SettingsPage extends React.PureComponent {
    render() {
        const { classes, user } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={1}>
                        <Link to="/feed">
                            <Button color="secondary" className={classes.button}>
                                Back
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <CardHeader className={classes.cardHeader} title="Settings" />
                            <CardContent>
                                <Typography variant="title">
                                    <Avatar
                                        alt={user.fullName}
                                        src={user.photoUrl}
                                        className={classes.avatar}
                                    />{user.fullName}
                                </Typography>
                                <Typography variant="headline">Account settings</Typography>
                                <TextField
                                    label="Type your name here"
                                    defaultValue={user.fullName}
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <Typography variant="headline">Interests</Typography>
                                <List>
                                    <Grid container>
                                        {[0, 1, 2, 3].map(value => (
                                            <Grid item xs={6} sm={4}>
                                                <ListItem
                                                    key={value}
                                                    role={undefined}
                                                    dense
                                                    button
                                                    className={classes.listItem} >
                                                    <Checkbox
                                                        tabIndex={-1}
                                                        disableRipple
                                                    />
                                                    <ListItemText primary={`Line item ${value + 1}`} />
                                                </ListItem>
                                            </Grid>
                                        ))}
                                    </Grid >
                                </List>
                                <Typography variant="headline">Social media accounts</Typography>
                                <List>
                                    <Grid container>
                                        {[0, 1, 2, 3].map(value => (
                                            <Grid item xs={6} sm={4}>
                                                <ListItem
                                                    key={value}
                                                    role={undefined}
                                                    dense
                                                    button
                                                    className={classes.listItem} >
                                                    <Checkbox
                                                        tabIndex={-1}
                                                        disableRipple
                                                    />
                                                    <ListItemText primary={`Line item ${value + 1}`} />
                                                </ListItem>
                                            </Grid>
                                        ))}
                                    </Grid >
                                </List>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Save
                                </Button>
                                <Button size="small" color="secondary">
                                    Log out
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

SettingsPage.defaultProps = {
    user: {
        fullName: 'Gaben',
        photoUrl: 'http://www.gamasutra.com/db_area/images/news/2017/Feb/291225/gabe_newell_thumb.jpg',

    }
}

SettingsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsPage);