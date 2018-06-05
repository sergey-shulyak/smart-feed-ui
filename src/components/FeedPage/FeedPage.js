import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { PublicationList } from '../PublicationList';
import { FilterList } from "../FilterList";
import { fetchFeed, fetchFeedCategory } from './FeedPageActions';

import isEmpty from 'lodash/isEmpty'
import { replace } from 'react-router-redux';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
// import Card from "@material-ui/core/Card";
import Search from "@material-ui/icons/Search";

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '25px'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    search: {
        width: '100%',
        margin: 0
    }
});

class FeedPage extends React.PureComponent {
    state = {
        filteredPublications: null
    };

    handleSearch = (e) => {
        const { value: query } = e.target;

        if (query.length === 0) {
            this.setState({ filteredPublications: null })
        }

        const filteredPublications = this.props.publications
            .filter(pub => pub.text.includes(query) || (pub.title && pub.title.includes(query)));

        this.setState({ filteredPublications })
    };

    handleFilter = (filter) => {
        if (filter === 'All') {
            this.props.fetchFeed();
        } else {
            this.props.fetchFeedCategory(filter);
        }
    };

    componentDidMount() {
        this.props.fetchFeed();
    }

    render() {
        const { classes, publications, filters } = this.props;
        const { filteredPublications } = this.state;

        const publicationsToShow = isEmpty(filteredPublications) ? publications : filteredPublications;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid container justify="center">
                        <Grid item md={7} sm={12} xs={12}>
                            <Paper className={classes.paper}>
                                <TextField
                                    id="search"
                                    name="search"
                                    className={classes.search}
                                    value={this.state.name}
                                    color="inherit"
                                    margin="dense"
                                    onChange={this.handleSearch}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Search />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <FilterList filters={filters} onFilterSelect={this.handleFilter} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        {publicationsToShow.length !== 0
                            ? <PublicationList publications={publicationsToShow} />
                            : <Paper className={classes.paper}>Add at least one source in settings</Paper>}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

FeedPage.defaultProps = {
    publications: []
}

function mapStateToProps(state, props) {
    return {
        user: state.User.user,
        publications: state.Feed.publications,
        filters: state.Feed.filters
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        fetchFeed: () => dispatch(fetchFeed()),
        fetchFeedCategory: (categoryName) => dispatch(fetchFeedCategory(categoryName)),
        returnToHome: () => dispatch(replace('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FeedPage));
