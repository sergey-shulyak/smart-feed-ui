import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getPublicationSubheader } from '../../utils/textUtils';
import { fetchPublication } from "./PublicationPageActions";

import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    publicationText: {
        textAlign: 'justify',
        fontSize: '12pt'
    }
});

class PublicationPage extends React.PureComponent {
    state = {
        copied: false
    }

    handleShare = () => {
        this.setState({copied: true});

        setTimeout(() => this.setState({copied: false}), 3000);
    }

    componentDidMount() {
        const { fetchPublication, match } = this.props;

        fetchPublication(match.params.publicationId);
    }

    render() {
        const { classes, publication } = this.props;
        const { author, createdAt, text, title, url } = publication; //TODO: ДОбавить на бекенде

        const header = (
            <div>
                <div>{getPublicationSubheader(author, createdAt)}</div>
                <Link to={url || ''} target="_blank"><Button color="primary"> Read at source </Button></Link>
            </div>
        );

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
                            <CardHeader className={classes.cardHeader} title={title} subheader={header} />
                            <CardContent>
                                <Typography component="p" className={classes.publicationText}>
                                    {text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CopyToClipboard text={url} onCopy={this.handleShare}>
                                    <Button size="small" color="primary">
                                        {this.state.copied ? 'Copied to clipboard' : 'Share'}
                                    </Button>
                                </CopyToClipboard>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

PublicationPage.defaultProps = {
    author: 'Johno Jooo',
    title: 'Sample title',
    sourceUrl: 'https://twitter.com/cleverlifetips/status/1003214471014371328',
    text: ''
};

PublicationPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
    return {
        publication: state.Publication
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        fetchPublication: (publicationId) => dispatch(fetchPublication(publicationId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PublicationPage)));