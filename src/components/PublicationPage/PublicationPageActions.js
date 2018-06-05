import { createAction } from 'redux-actions';

export const FETCH_PUBLICATION = 'FETCH_PUBLICATION';

export const SAVE_PUBLICATION = 'SAVE_PUBLICATION';

export const fetchPublication = createAction(FETCH_PUBLICATION);
export const savePublication = createAction(SAVE_PUBLICATION);
