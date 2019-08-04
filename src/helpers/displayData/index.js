import React from 'react';
import PropTypes from 'prop-types';

export const DisplayData = (props) => (
    <React.Fragment>
        <label>
            {props.label}
        </label>
        <div>
            {props.value}
        </div>

    </React.Fragment>
)

DisplayData.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};