import React from "react";
import './Login.css';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { authSuccess, validateUser } from '../../actions';
import { Form } from './form'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            error: false,

        };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, error: false })
    }
    onSubmit = () => {
        let { userName, password } = this.state;
        if (userName !== '' && password !== '') {
            this.props.validateUser(this.state, this.props.history)
            //this.props.history.push('/viewProducts');
        } else {
            this.setState({ error: true })
        }
    }
    clearAll = () => {
        this.setState({ userName: "", password: "" })
    }
    render() {
        return (
            <div className="loginBox">
                <h2>Login</h2>
                <h6>{this.props.msg}</h6>
                <Form handleChange={this.handleChange} onSubmit={this.onSubmit} errorMessage={"Please Enter Valid Credentials"} clearAll={this.clearAll} title={"Login"} {...this.state} />
                <div className="form-group">
                    <Link to="/signUp">
                        <h6>SignUp</h6>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        errrorMessage: state.auth.error,
        isAuth: state.auth.isAuth,
        msg: state.auth.msg
    }
}

const mapDispatchToProps = {
    authSuccess,
    validateUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginForm))

