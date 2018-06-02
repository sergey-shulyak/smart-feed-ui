import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { PublicationList } from '../PublicationList';
import { FilterList } from "../FilterList";
import { fetchFeed } from './FeedPageActions';

import isEmpty from 'lodash/isEmpty'
import { replace } from 'react-router-redux';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '25px'
    }
});

class FeedPage extends React.PureComponent {
    componentDidMount() {
        if (isEmpty(this.props.user)) {
            this.props.returnToHome();
            return;
        }

        this.props.fetchFeed();
    }

    render() {
        const { classes, publications, filters } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24} alignItems="flex-start">
                    <Grid item xs={12} sm={3}>
                        <FilterList filters={filters} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <PublicationList publications={publications} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

// FeedPage.defaultProps = {
//     publications: [{
//         id: 1,
//         title: 'Love React',
//         text: 'React is one of adjasjdaskjdlkasj',
//         author: 'Johny Doo',
//         source: 'Twitter',
//         sourceUrl: 'https://twitter.com/cleverlifetips/status/1002057843602796544'
//     }, {
//         id: 12,
//         title: 'Love Redux',
//         author: 'John Doe',
//         text: 'React is one of adjasjdaskjdlkasj',
//     }, {
//         id: 228,
//         title: 'Love Everything',
//         author: 'Inspector Keks',
//         text: 'React is one of adjasjdaskjdlkasj',
//     }],
//     filters: [{
//         id: 1,
//         name: 'Tech'
//     }, {
//         id: 2,
//         name: 'Music'
//     }, {
//         id: 1,
//         name: 'Machine Learning'
//     }]
// }

FeedPage.defaultProps = {
    publications: []
}

function mapStateToProps(state, props) {
    return {
        user: state.User,
        publications: state.Feed,
        filters: state.User.filters
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        fetchFeed: (email, password) => dispatch(fetchFeed()),
        returnToHome: () => dispatch(replace('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FeedPage));
