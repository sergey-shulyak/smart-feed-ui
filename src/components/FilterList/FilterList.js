import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';


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
        paddingLeft: 24
    },
    filterList: {
        padding: '0 24px'
    }
};

class FilterList extends React.PureComponent {
    state = {
        value: 'All'
    };

    handleChange = (e) => {
        this.setState({value: e.target.value})
        this.props.onFilterSelect(e.target.value);
    };

    // handlerReset = () => {
    //     this.setState({value: null})
    // }

    render() {
        const {classes, filters} = this.props;

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader title="Categories" subheader="Choose categories you want to see in feed"/>
                    <CardContent className={classes.filterList}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            {/*<FormLabel component="legend">Gender</FormLabel>*/}
                            <RadioGroup
                                aria-label="filter"
                                name="filter"
                                className={classes.group}
                                value={this.state.value}
                                onChange={this.handleChange}>
                                <FormControlLabel
                                    value="All"
                                    control={<Radio/>}
                                    label="All"/>
                                {filters.map(filter => (
                                    <FormControlLabel
                                        key={filter.id}
                                        value={filter.title}
                                        control={<Radio/>}
                                        label={filter.title}/>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    {/*<CardActions>*/}
                        {/*<Button size="small" onClick={this.handleReset}>Reset</Button>*/}
                    {/*</CardActions>*/}
                </Card>
            </div>
        );
    }
}

FilterList
    .defaultProps = {
    filters: []
    // filters: [{
    //     id: 1,
    //     name: 'Tech'
    // }, {
    //     id: 2,
    //     name: 'Music'
    // }, {
    //     id: 3,
    //     name: 'Machine Learning'
    // }]
}

export default withStyles(styles)

(
    FilterList
)
;
