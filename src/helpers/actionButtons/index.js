import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser,logout } from '../../actions'

export const ActionButtons = (props) => {
    return (<React.Fragment><div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 0' }}>
        <Link to={'/viewProducts'}><button className="btn btn-primary">VIEW PRODUCTS</button></Link>
        <Link to={'/editInfo'}><button className="btn btn-primary">  EDIT YOUR INFO</button></Link>
        <Link to={'/allUsers'}><button className="btn btn-primary">VIEW ALL USERS</button></Link>
        <Link to={'/addProduct'}>  <button className="btn btn-primary">ADD PRODUCTS</button></Link>
        <button className="btn btn-primary" onClick={props.deleteUser}>DELETE YOUR ACCOUNT</button>
        <button className="btn btn-primary" onClick={props.logout}>LOGOUT</button>
    </div>
        <div>
            {props.children}
        </div>
    </React.Fragment>)
}

const mapDispatchToProps = {
    deleteUser,
    logout
}

export default connect(null, mapDispatchToProps)(ActionButtons)