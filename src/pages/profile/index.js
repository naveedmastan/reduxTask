import React from "react";
import { connect } from 'react-redux';




class Profile extends React.Component {
    render() {
        return (<React.Fragment>
            <h2>Welcome {this.props.loggedUser.userName}</h2>

        </React.Fragment>)
    }
}


const mapStateToProps = (state) => {
    return {
        loggedUser: state.auth.loggedUser
    }
}



export default connect(
    mapStateToProps, null

)((Profile))

