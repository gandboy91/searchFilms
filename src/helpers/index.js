import queryString from "query-string";
import {MIN_SEARCH_LENGTH} from "../constants/index";
import {CHANGE_SEARCH_STRING} from "../actions/search";

export const buildSearchQuery = (s, page = 1) => queryString.stringify({s, page})

export const wait = msec => new Promise(resolve => {
    setTimeout(() => resolve(), msec)
})

/**
 * check if given action is change search string action with correct search string
 * @param type
 * @param searchString
 */
export const allowFetchCondition = ({type, searchString}) => type === CHANGE_SEARCH_STRING
    && searchString.length >= MIN_SEARCH_LENGTH;

/**
 * check if given action is change search string action with incorrect search string
 */
export const stopFetchCondition = ({type, searchString}) => type === CHANGE_SEARCH_STRING
    && searchString.length < MIN_SEARCH_LENGTH;

/**
 * filter by imdbId to prevent duplication
 * @param films
 */
export const uniqueByImdbId = films => {
    let ids = [];
    return films.reduce((acc, film) => {
        if (!ids.includes(film.imdbID)) {
            acc.push(film);
            ids.push(film.imdbID)
        }
        return acc;
    }, []);
}