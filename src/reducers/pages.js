import {SET_CURRENT_PAGE} from "../actions/pages";
import {FETCH_NEXT_PAGE, RECEIVE_NEXT_PAGE} from "../actions/films";

const initialState = {
    currentPage: 1,
    isProcessing: false
};

export default function pages(state = initialState, action) {
    switch (action.type) {
        case FETCH_NEXT_PAGE:
            return {
                ...state,
                isProcessing: true
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case RECEIVE_NEXT_PAGE:
            return {
                ...state,
                isProcessing: false,
            }
        default:
            return state;
    }
}