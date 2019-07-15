import {connect} from "react-redux"
import {SearchFilmApp} from "../components/SearchFilmApp"

/**
 * when there're more films found than displayed, allows to show 'load more'
 */
const mapStateToProps = ({ films: {films, total, isProcessing} }) => ({
    allowLoadMore: !isProcessing && !!films.length && (total > films.length)
});

export default connect(mapStateToProps)(SearchFilmApp);
