import React from 'react'
import {connect} from "react-redux"
import {fetchNextPage} from "../actions/films"
import Spinner from "../uiComponents/Spinner";

/**
 * 'Load more' container. Represents button for fetching next page
 */
const NextPageButton = ({ fetchNextPage, isProcessing }) => isProcessing
    ? <Spinner/>
    : <button className="btn btn-link my-2" onClick={fetchNextPage}>
        load more..
    </button>;

const mapStateToProps = ({ pages: {isProcessing} }) => ({ isProcessing })
const mapDispatchToProps = { fetchNextPage }

export default connect(mapStateToProps, mapDispatchToProps)(NextPageButton);
