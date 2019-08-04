import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Form } from '../../helpers/form/index.js'
import '../../styles.css';
import {updateUser} from '../../actions'


class EditInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.loggedUser.userName,
            password: props.loggedUser.password,
            fullName: this.props.loggedUser.fullName,
            profession: this.props.loggedUser.profession
        }
    }
    clearAll = () => {
        this.setState({
            userName: this.props.loggedUser.userName,
            password: this.props.loggedUser.password,
            fullName: this.props.loggedUser.fullName,
            profession: this.props.loggedUser.profession
        })
    }
    onSubmit = () => {
        this.props.updateUser(this.state,this.props.history)

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, error: false })
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
        return <div className="loginBox">
                <Form handleChange={this.handleChange}
                    heading={"Edit Info"}
                    onSubmit={this.onSubmit}
                    errorMessage={"Please Enter Valid Credentials"}
                    clearAll={this.clearAll}
                    data={data}
                    title={"Update"}
                    userName={this.state.userName}
                    password={this.state.password}
                    fullName={this.state.fullName}
                    profession={this.state.profession}

                />
            </div>
       
    }
}


const mapStateToProps = (state) => {
    return {
        loggedUser: state.auth.loggedUser
    }
}

const  mapDispatchToProps={
    updateUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EditInfo))

