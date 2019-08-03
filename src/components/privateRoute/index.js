import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import {ActionButtons} from '../actionButtons';




const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuth === true
            ? <ActionButtons><Component {...props} /></ActionButtons>
            : <Redirect to='/' />
    )} />
)

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, null)(PrivateRoute);