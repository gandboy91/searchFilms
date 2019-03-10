import React from 'react'
import PropTypes from 'prop-types';
import './styles/Spinner.css'

const Spinner = (props) => {
    const {radius, color} = props;
    return <div className='Spinner m-3' style={{
        width:radius,
        height:radius,
        borderColor:color
    }}/>
}

Spinner.defaultProps = {
    radius: 25,
    color: 'gray'
};

Spinner.propTypes = {
    radius: PropTypes.number,
    color: PropTypes.string
};

export default Spinner
