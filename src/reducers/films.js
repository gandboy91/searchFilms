import {
    FETCH_FILMS_BY_SEARCH, FETCH_FILMS_FAILED, RECEIVE_FILMS, RECEIVE_NEXT_PAGE, STOP_FETCHING
} from "../actions/films";

const initialState = {
    isProcessing: false,
    films: [],
    total: 0
};

export default function films(state = initialState, action) {
    switch (action.type) {
        case FETCH_FILMS_BY_SEARCH:
            return {
                ...state,
                isProcessing: true
            }
        case RECEIVE_FILMS:
            return {
                ...state,
                films: action.films,
                total: action.total
            }
        case RECEIVE_NEXT_PAGE:
            return {
                ...state,
                films: [...state.films, ...action.films]
            }
        case FETCH_FILMS_FAILED:
            return {
                ...state,
                films: [],
            }
        case STOP_FETCHING:
            return {
                ...state,
                isProcessing: false
            }
        default:
            return state;
    }
}