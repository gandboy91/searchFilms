import {CHANGE_SEARCH_STRING} from "../actions/search";

const initialState = {
    searchString: '',
};

export default function search(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_STRING:
            return {
                ...state,
                searchString: action.searchString
            }
        default:
            return state;
    }
}