import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Spinner from "../uiComponents/Spinner"
import {fetchById} from "../requests/index"

const UnavailableServiceNote = props => <div className="alert alert-warning">
        Service is temporary unavailable
    </div>

const NavBlock = props => <nav>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">films</li>
        </ol>
    </nav>

const ActorsList = ({ actors }) => <p className="card-text">
        {actors.split(',').map(actor =>
            <span key={actor} className="badge badge-light mr-1">{actor}</span>
        )}
    </p>

const FilmTitle = ({ title, rating }) => <h4 className="card-title">
        {rating && <span className="badge badge-primary">{rating}&nbsp;</span>}
        <span className="p-1 ml-1">{title}</span>
    </h4>

const FilmCardBody = ({ Poster, Title, Actors, Country, Year, imdbRating, Genre, Plot }) =>
    <div className="card border-light shadow-lg bg-warning text-white">
        <div className="row">
            <div className="col-md-4">
                <img src={Poster} className="card-img p-1" alt={Title} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <FilmTitle title={Title} rating={imdbRating} />
                    <h6 className="card-text text-muted">{Country}, {Year}</h6>
                    <div className="text-muted"><small>{Genre}</small></div>
                    <ActorsList actors={Actors} />
                    <p className="card-text">{Plot}</p>
                </div>
            </div>
        </div>
    </div>

/**
 * Film card component.
 * Represents film data
 */
class FilmCard extends PureComponent {
    static propTypes = {
        filmId: PropTypes.string.isRequired
    }

    state = {
        isProcessing: false,
        data: {}
    }

    componentDidMount() {
        this.setState({ isProcessing: true });
        fetchById(this.props.filmId)
            .then(this.handleSuccessResponse)
            .catch(this.handleErrorResponse)
    }

    handleSuccessResponse = data => this.setState({ data, isProcessing: false })

    handleErrorResponse = error => {
        console.warn(error);
        this.setState({ isProcessing: false })
    }

    renderFilmCardBody = data => Object.keys(data).length
        ? <FilmCardBody {...data} />
        : <UnavailableServiceNote />

    render() {
        const { isProcessing, data } = this.state;
        return <div className="container films-app mt-4">
            <NavBlock />
            {
                !isProcessing
                    ? this.renderFilmCardBody(data)
                    : <Spinner/>
            }
        </div>
    }
}

export default FilmCard;
