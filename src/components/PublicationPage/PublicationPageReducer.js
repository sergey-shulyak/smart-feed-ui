import { handleActions } from 'redux-actions';
import {savePublication} from "./PublicationPageActions";

const defaultState = {};

const feedReducer = handleActions({
    [savePublication]: (state, { payload: publication }) => publication,
}, defaultState);

export default feedReducer;
