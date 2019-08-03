import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Form } from './form'
import './Login.css';


class EditInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.loggedUser.userName,
            password: props.loggedUser.password
        }
    }
    clearAll = () => {
        this.setState({
            userName: this.props.loggedUser.userName,
            password: this.props.loggedUser.password
        })
    }
    onSubmit = () => {

    }
    render() {
        return <React.Fragment>
            <h2>EDIT INFO</h2>
            <div className="loginBox">
                <Form handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    errorMessage={"Please Enter Valid Credentials"}
                    clearAll={this.clearAll}
                    title={"Update"}
                    userName={this.state.userName}
                    password={this.state.password}
                />
            </div>
        </React.Fragment>
    }
}


const mapStateToProps = (state) => {
    return {
        loggedUser: state.auth.loggedUser
    }
}



const mapDispatchToProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EditInfo))

