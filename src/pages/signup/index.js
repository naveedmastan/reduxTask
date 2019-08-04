import React from "react";
import '../../styles.css';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { addUser } from '../../actions';
import { Form } from '../../helpers/form/index.js'

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
            this.props.addUser(this.state, this.props.history);
        } else {
            this.setState({ error: true })
        }
    }
    clearAll = () => {
        this.props.history.push('/');
    }
    render() {
        let data = [{
            field: "userName",
            type: 'text',
            displayName: 'User Name'
        },
        {
            field: "password",
            type: 'password',
            displayName: 'Password'
        },
        {
            field: "fullName",
            type: 'text',
            displayName: 'Name'
        },
        {
            field: "profession",
            type: 'text',
            displayName: 'Profession'
        },
        ];
        return (
            <div className="loginBox">

                <Form heading={"SignUp"} handleChange={this.handleChange} data={data} onSubmit={this.onSubmit} clearAll={this.clearAll} errorMessage={"Please Fill all details"} title={"SignUp"} clearTitle={'Cancel'} {...this.state} />
                <h6>{this.props.msg}</h6>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
   
        msg: state.auth.msg
    }
}

const mapDispatchToProps = {
    addUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginForm))

