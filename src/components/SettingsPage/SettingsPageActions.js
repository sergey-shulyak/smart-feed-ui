import { createAction } from 'redux-actions';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_SOCIAL_INTEGRATIONS = 'FETCH_SOCIAL_INTEGRATIONS';

export const FETCH_SETTINGS = 'FETCH_SETTINGS';

export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_SOCIAL_INTEGRATIONS = 'SAVE_SOCIAL_INTEGRATIONS';

export const ADD_USER_CATEGORY = 'ADD_USER_CATEGORY';
export const REMOVE_USER_CATEGORY = 'REMOVE_USER_CATEGORY';


// export const fetchCategories = createAction(FETCH_CATEGORIES);
// export const fetchSocialIntegrations = createAction(FETCH_SOCIAL_INTEGRATIONS);
export const fetchSettings = createAction(FETCH_SETTINGS);

export const addUserCategory = createAction(ADD_USER_CATEGORY);
export const removeUserCategory = createAction(REMOVE_USER_CATEGORY);

export const saveCategories = createAction(SAVE_CATEGORIES);
export const saveSocialIntegrations = createAction(SAVE_SOCIAL_INTEGRATIONS);
