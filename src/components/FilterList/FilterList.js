import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    card: {
        minWidth: 150
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    filter: {
        padding: 0
    },
    filterList: {
        padding: '0 10px'
    }
};

function PublicationList(props) {
    const { classes, filters } = props;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader title="Categories" subheader="Choose categories you want to see in feed" />
                <CardContent className={classes.filterList}>
                    <List>
                        {filters.map((filter) => (
                            <ListItem
                                className={classes.filter}
                                key={filter.id}
                                button>
                                <Checkbox />
                                <ListItemText primary={filter.name} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <CardActions>
                    <Button size="small">Reset</Button>
                </CardActions>
            </Card>
        </div>
    );
}

PublicationList.defaultProps = {
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

export default withStyles(styles)(PublicationList);
