import {homePageSaga} from '../components/HomePage';

export default function* rootSaga() {
    yield [
        homePageSaga
    ];
}