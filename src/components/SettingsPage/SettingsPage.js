import React from 'react';
import {connect} from 'react-redux'
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

import capitalize from 'lodash/capitalize';
import {addUserCategory, fetchSettings, removeUserCategory} from "./SettingsPageActions";

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
    handleCategoryCheck = (e) => {
        const {name: categoryId, checked} = e.target;

        if (checked) {
            this.props.addUserCategory(categoryId);
        } else {
            this.props.removeUserCategory(categoryId);
        }
    };
    componentDidMount() {
        this.props.fetchSettings();
    }

    render() {
        const { classes, user, categories, integrations } = this.props;

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
                                        src={user.avatarUrl}
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
                                        {categories.map(category => (
                                            <Grid item xs={6} sm={4}>
                                                <ListItem
                                                    key={category.id}
                                                    role={undefined}
                                                    dense
                                                    button
                                                    className={classes.listItem} >
                                                    <Checkbox
                                                        tabIndex={-1}
                                                        disableRipple
                                                        name={category.id}
                                                        checked={category.isEnabled}
                                                        onChange={this.handleCategoryCheck}
                                                    />
                                                    <ListItemText primary={category.title} />
                                                </ListItem>
                                            </Grid>
                                        ))}
                                    </Grid >
                                </List>
                                <Typography variant="headline">Social media accounts</Typography>
                                <List>
                                    <Grid container>
                                        {integrations.map(account => (
                                            <Grid item xs={6} sm={4}>
                                                <ListItem
                                                    key={account.id}
                                                    dense
                                                    button
                                                    disableRipple
                                                    className={classes.listItem} >
                                                    <Checkbox
                                                        tabIndex={-1}
                                                        checked={account.isEnabled}
                                                    />
                                                    <ListItemText primary={capitalize(account.type)} />
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
    },
    categories: [],
    integrations: []
}

SettingsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
    return {
        user: state.User.user,
        categories: state.User.settings.categories,
        integrations: state.User.settings.integrations
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        fetchSettings: () => dispatch(fetchSettings()),
        addUserCategory: (categoryId) => dispatch(addUserCategory(categoryId)),
        removeUserCategory: (categoryId) => dispatch(removeUserCategory(categoryId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SettingsPage));