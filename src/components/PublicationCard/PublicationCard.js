import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import moment from 'moment';
import { getPublicationSubheader } from '../../utils/textUtils';

const styles = theme => ({
    card: {
        minWidth: 275,
        marginBottom: '15px'
    },
    pos: {
        marginBottom: 12,
    },
});

function PublicationCard(props) {
    const { id, classes, author, title, text, createdAt, source, sourceUrl } = props;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeaderText}
                    title={title}
                    subheader={getPublicationSubheader(author, createdAt)} />
                <CardContent>
                    <Typography component="p">{text.substr(0, 200)}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <Link to={`/feed/${id}`}>Read in app</Link>
                    </Button>
                    <Button size="small">
                        <a href={sourceUrl} target="_blank">Read on {source}</a>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default withStyles(styles)(PublicationCard);
