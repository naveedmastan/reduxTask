import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import '../products/Product.css'
import { DisplayData } from '../../helpers/displayData';
import { getAllUsers } from '../../actions'

class AllUsers extends React.Component {
    componentDidMount() {
        this.props.getAllUsers()
    }
    render() {
        if (!this.props.users || (this.props.users && this.props.users.length === 0)) {
            return <div>Loading...</div>
        }
        return (<div>
            <h3>USERS</h3>
            <div className="products">
                {
                    this.props.users.map((user, index) => {

                        return <div key={user.id + index} className="productBox">
                            {
                                Object.keys(user).map((pKey) => {
                                    if (pKey !== "id" && pKey !== "password" && pKey !== 'error') {
                                        return <DisplayData label={pKey} key={user.id + pKey} value={user[pKey]} />
                                    } else {
                                        return null
                                    }
                                })
                            }
                            {user.id === this.props.loggedUser.id && <Link to="/editInfo"><button className='btn btn-primary'>UPDATE</button></Link>}
                        </div>
                    })
                }
            </div>
        </div>)
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.auth.users,
        loggedUser: state.auth.loggedUser
    }
}

const mapDispatchToProps = {
    getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);