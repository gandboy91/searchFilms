import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Film preview card component. Show base info and link to film's page.
 */
export const FilmPreviewCard = ({ filmId, title, year, type }) => <div className="card">
    <div className="card-body py-2 px-3">
        <div className="card-title d-flex justify-content-between">
            <h5>{title}</h5>
            <h5 className="text-muted mr-1">{year}</h5>
        </div>
        <div className="card-text d-flex justify-content-between">
            <p>Feel free to click 'read more' and learn more about this {type}</p>
            <Link className="btn btn-info" to={`/films/${filmId}`}>read more</Link>
        </div>
    </div>
</div>

FilmPreviewCard.propTypes = {
    filmId: PropTypes.string.isRequired,
    title: PropTypes.string,
    year: PropTypes.string,
    type: PropTypes.string
}