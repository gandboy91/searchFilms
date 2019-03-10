import React from 'react';
import SearchInputContainer from '../containers/SearchInputContainer';
import FilmListContainer from '../containers/FilmListContainer';
import LoadMoreContainer from '../containers/LoadMoreContainer';

export const SearchFilmApp = ({ allowLoadMore }) => <div className="container films-app mt-3">
    <h3 className="my-3 text-center">Films search app</h3>
    <SearchInputContainer />
    <FilmListContainer />
    {allowLoadMore && <LoadMoreContainer />}
</div>
