import React, {PureComponent} from 'react';
import {MIN_SEARCH_LENGTH} from "../constants/index";

/**
 * Search input component. Add error class when search string is not empty but incorrect
 */
export default class SearchInput extends PureComponent {
    render() {
        const { searchString, handleSearchChange } = this.props;
        const className = `form-control mr-sm-2 
            ${searchString.length && searchString.length < MIN_SEARCH_LENGTH ? 'is-invalid' : ''}`;

        return <input type="search"
                className={className}
                value={searchString}
                onChange={handleSearchChange}
                placeholder="search"
                aria-label="Search"
            />
    }
}

