import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { PublicationList } from '../PublicationList';
import { FilterList } from "../FilterList";

const styles = theme => ({
    root: {
        flexGrow: 1,
        // paddingTop: '25px'
        padding: '25px'
    }
});

class FeedPage extends React.PureComponent {
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

FeedPage.defaultProps = {
    publications: [{
        id: 1,
        title: 'Love React',
        text: 'React is one of adjasjdaskjdlkasj',
        author: 'Johny Doo',
        source: 'Twitter',
        sourceUrl: 'https://twitter.com/cleverlifetips/status/1002057843602796544'
    }, {
        id: 12,
        title: 'Love Redux',
        author: 'John Doe',
        text: 'React is one of adjasjdaskjdlkasj',
    }, {
        id: 228,
        title: 'Love Everything',
        author: 'Inspector Keks',
        text: 'React is one of adjasjdaskjdlkasj',
    }],
    filters: [{
        id: 1,
        name: 'Tech'
    }, {
        id: 2,
        name: 'Music'
    }, {
        id: 1,
        name: 'Machine Learning'
    }]
}

export default withStyles(styles)(FeedPage);
