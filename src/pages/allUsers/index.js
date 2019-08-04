import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import '../products/Product.css'
import { DisplayData } from '../../helpers/displayData'

class AllUsers extends React.Component {
    render() {
        return (<div>
            <h3>USERS</h3>
            <div className="products">
                {
                    this.props.users.map((user) => {

                        return <div key={user.id} className="productBox">
                            {
                                Object.keys(user).map((pKey) => {
                                    if (pKey !== "id" && pKey !== "password" && pKey !== 'error') {
                                        return <DisplayData label={pKey} index={user.id + pKey} value={user[pKey]} />
                                    } else {
                                        return <React.Fragment />
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

export default connect(mapStateToProps, null)(AllUsers);