import React from "react";
import './Login.css';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { addUser } from '../../actions';
import { Form } from './form'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            error: false
        };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, error: false })
    }
    onSubmit = () => {
        let { userName, password } = this.state;
        if (userName !== "" && password !== "") {
            this.props.addUser(this.state,this.props.history);
        } else {
            this.setState({ error: true })
        }
    }
    clearAll = () => {
        this.props.history.push('/');
    }
    render() {        
        return (
            <div className="loginBox">
                <h2>SignUp</h2>
                <Form handleChange={this.handleChange} onSubmit={this.onSubmit} clearAll={this.clearAll} errorMessage={"Please Fill all details"} title={"SignUp"} clearTitle={'Cancel'} {...this.state} />
                
            </div>
        );
    }
}


const mapDispatchToProps = {
    addUser
}

export default connect(
    null,
    mapDispatchToProps
)(withRouter(LoginForm))

