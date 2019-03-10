import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Spinner from "../uiComponents/Spinner";
import {FilmPreviewCard} from "./FilmPreviewCard";
import {MIN_SEARCH_LENGTH} from "../constants/index";

/**
 * Film list component. Render first few found films.
 */
export default class FilmList extends PureComponent {
    static propTypes = {
        isProcessing: PropTypes.bool,
        films: PropTypes.array.isRequired,
        total: PropTypes.number,
        searchString: PropTypes.string
    }

    renderShortQueryHint = () => <p>
            Your query must be at least {MIN_SEARCH_LENGTH} letters length.
        </p>


    renderSummary = () => {
        const {total, films} = this.props;
        const shownCount = films ? films.length : 0;
        return <p>
            {shownCount ? `${films.length} of ${total} results are shown` : `Nothing was found`}
        </p>
    }

    renderFilms = () => {
        const {films} = this.props;
        return <div>
            {
                films.map(({Title, Year, Type, imdbID}) =>
                    <FilmPreviewCard key={imdbID}
                        title={Title}
                        year={Year}
                        type={Type}
                        filmId={imdbID}
                    />
                )
            }
        </div>
    }

    render() {
        return this.props.isProcessing
            ? <Spinner/>
            : <div>
                <div className="text-muted mt-2">
                    {this.props.searchString.length >= MIN_SEARCH_LENGTH
                        ? this.renderSummary()
                        : this.renderShortQueryHint()
                    }
                </div>
                {this.renderFilms()}
            </div>
    }
}
