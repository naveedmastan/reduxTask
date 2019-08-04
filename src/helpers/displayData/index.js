import React from 'react';


export const DisplayData = (props) => (
    <React.Fragment key={props.index}>>
        <label>
            {props.label}
        </label>
        <div>
            {props.value}
        </div>

    </React.Fragment>
)