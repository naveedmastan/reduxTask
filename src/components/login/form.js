import React from "react";

export const Form = (props) =>
    (<React.Fragment><div className="form-group">
        <input
            placeholder="Enter userName"
            type="text"
            name="userName"
            value={props.userName}
            onChange={(e) => props.handleChange(e)}
        />
    </div>
        <div className="form-group">
            <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={props.password}
                onChange={(e) => props.handleChange(e)}
            />
        </div>
        {
            props.error && <div className="form-group error">{props.errorMessage} </div>
        }
        <div className="form-group formActions">
            <button type="submit" onClick={props.onSubmit} className='btn btn-primary'>{props.title}</button>
            <button type="clear" onClick={props.clearAll} className='btn'>{props.clearTitle ? props.clearTitle : "Clear"}</button>
        </div>
    </React.Fragment>)

