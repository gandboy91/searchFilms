import {connect} from "react-redux"
import FilmList from "../components/FilmList"

const mapStateToProps = ({ films: {films, total, isProcessing}, search: {searchString} }) => ({
    films,
    isProcessing,
    searchString,
    total
});

export default connect(mapStateToProps)(FilmList);
