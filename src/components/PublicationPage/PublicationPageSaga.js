import { takeEvery, call, put, all, select } from 'redux-saga/effects';

import {fetchPublication} from "../../api/publicationApi";
import {FETCH_PUBLICATION, savePublication} from "./PublicationPageActions";

export function* fetchPublicationSaga({payload: publicationId}) {
    try {
        const {data: publication} = yield call(fetchPublication, publicationId);

        yield put(savePublication(publication));
    } catch (error) {
        console.error(error);
    }
}

export default function* () {
    yield all([
        takeEvery(FETCH_PUBLICATION, fetchPublicationSaga)
    ]);
}
