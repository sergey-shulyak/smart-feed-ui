import moment from 'moment';

export const getPublicationSubheader = (author, createdAt) =>
    `${moment(createdAt).format('HH:mm DD MMM YYYY')} by ${author}`;