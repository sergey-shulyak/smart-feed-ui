import { handleActions } from 'redux-actions';
import { saveCategories, saveSocialIntegrations} from './SettingsPageActions';

const defaultState = {};

const settingsReducer = handleActions({
    [saveCategories]: (state, { payload: categories }) => ({ ...state, categories }),
    [saveSocialIntegrations]: (state, {payload: integrations}) => ({...state, integrations })
}, defaultState);

export default settingsReducer;