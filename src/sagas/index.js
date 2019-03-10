import { call, put, takeLatest, take, takeEvery, delay, all, race, select, cancelled } from 'redux-saga/effects'
import { getCurrentParams } from '../selectors'
import {
    FETCH_NEXT_PAGE,
    fetchFilmsFailed,
    receiveFilms,
    receiveNextPage,
    fetchBySearch,
    stopFetching,
} from "../actions/films"
import {fetchFilms} from "../requests"
import {buildSearchQuery} from "../helpers"
import {setCurrentPage} from "../actions/pages"
import {allowFetchCondition, stopFetchCondition, uniqueByImdbId} from "../helpers/index"

/**
 * saga worker, makes searching request. wait 200ms before request
 * @param searchString
 */
function* fetchFilmsBySearch(searchString) {
    try {
        yield delay(200);
        yield put(fetchBySearch(searchString));
        const {Search, totalResults} = yield call(fetchFilms, buildSearchQuery(searchString));
        yield put(receiveFilms(uniqueByImdbId(Search), totalResults));
    } catch (e) {
        console.warn(e);
        yield put(fetchFilmsFailed);
    } finally {
        yield all([
            put(setCurrentPage(1)),
            put(stopFetching),
            ...(yield cancelled()) ? [ put(fetchFilmsFailed) ] : []
        ])
    }
}

/**
 * saga worker, handles search films request.
 * Start a race between fetching request and stop fetch action (witch is incorrect search string input)
 * @param {searchString} searchString change action
 * @see stopFetchCondition
 */
function* handleSearchRequestSaga({ searchString }) {
    yield race({
        task: call(fetchFilmsBySearch, searchString),
        cancel: take(stopFetchCondition)
    })
}

function* fetchFilmsNextPage() {
    const { searchString, currentPage } = yield select(getCurrentParams);
    try {
        const {Search} = yield call(fetchFilms, buildSearchQuery(searchString, currentPage + 1));
        yield all([
            put(receiveNextPage(Search)),
            put(setCurrentPage(currentPage + 1))
        ]);
    } catch (e) {
        console.warn(e);
        yield put(fetchFilmsFailed);
    } finally {
        yield put(stopFetching);
    }
}

/**
 * saga watcher. takes latest correct search string and launch worker when changing search.
 * Also watches next page (load more) request
 * @see allowFetchCondition
 */
function* fetchFilmsSaga() {
    yield all([
        takeLatest(allowFetchCondition, handleSearchRequestSaga),
        takeEvery(FETCH_NEXT_PAGE, fetchFilmsNextPage)
    ]);
}

export default fetchFilmsSaga;