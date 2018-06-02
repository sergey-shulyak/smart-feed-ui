import { createAction } from 'redux-actions';

export const LOGIN_SEND_DATA = 'LOGIN_SEND_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

export const loginSendData = createAction(LOGIN_SEND_DATA);
export const saveUserData = createAction(SAVE_USER_DATA);
export const clearUserData = createAction(CLEAR_USER_DATA);

