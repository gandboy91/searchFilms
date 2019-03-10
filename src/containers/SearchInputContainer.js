import {connect} from "react-redux"
import {changeSearchString} from "../actions/search";
import SearchInput from "../components/SearchInput"

const mapStateToProps = ({ search: {searchString} }) => ({ searchString });

const mapDispatchToProps = dispatch => ({
    handleSearchChange: ({target: {value}}) => dispatch(changeSearchString(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
