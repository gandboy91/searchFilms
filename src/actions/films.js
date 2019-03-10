export const FETCH_FILMS_BY_SEARCH = 'FETCH_FILMS_BY_SEARCH';
export const fetchBySearch = searchString => ({
    type: FETCH_FILMS_BY_SEARCH,
    searchString
});

export const FETCH_NEXT_PAGE = 'FETCH_NEXT_PAGE';
export const fetchNextPage = () => ({
    type: FETCH_NEXT_PAGE,
});

export const FETCH_FILMS_FAILED = 'FETCH_FILMS_FAILED';
export const fetchFilmsFailed = {
    type: FETCH_FILMS_FAILED
};

export const STOP_FETCHING = 'STOP_FETCHING';
export const stopFetching = {
    type: STOP_FETCHING
};

export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const receiveFilms = (films, total) => ({
    type: RECEIVE_FILMS,
    films,
    total: +total
});

export const RECEIVE_NEXT_PAGE = 'RECEIVE_NEXT_PAGE';
export const receiveNextPage = films => ({
    type: RECEIVE_NEXT_PAGE,
    films
});
