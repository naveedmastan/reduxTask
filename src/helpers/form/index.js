import React from "react";
import PropTypes from 'prop-types';

export const Form = (props) =>
    (<React.Fragment>
        <h2>{props.heading}</h2>
        {
            props.data.map(data => {
                return (<div key={data.field} className="form-group">
                    <input
                        placeholder={"Enter " + data.displayName}
                        type={data.type}
                        name={data.field}
                        value={props[data.field]}
                        onChange={(e) => props.handleChange(e)}
                    />
                </div>)
            })

        }
        {
            props.error && <div className="form-group error">{props.errorMessage} </div>
        }
        <div className="form-group formActions">
            <button type="submit" onClick={props.onSubmit} className='btn btn-primary'>{props.title}</button>
            <button type="clear" onClick={props.clearAll} className='btn'>{props.clearTitle ? props.clearTitle : "Clear"}</button>
        </div>
    </React.Fragment>)


Form.propTypes = {
    data: PropTypes.array.isRequired,
    error: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired,
    clearTitle:PropTypes.string,
    title:PropTypes.string.isRequired,
    errorMessage:PropTypes.string,
    handleChange:PropTypes.func.isRequired,
};


