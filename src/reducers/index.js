import { combineReducers } from 'redux';
import { products,users } from '../sampleData'

const initialState = {
    isAuth: false,
    users: users,
    error: '',
    msg: undefined,
};
const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_SUCCESS':
            return {
                ...state,
                isAuth: action.payload
            }
        case 'ADD_USER':
            return {
                ...state,
                users: action.users
            }
        case 'AUTHENTICATION_FAILURE':
            return {
                ...state,
                msg: "Invalid Credentials or User doesn't exist"
            }
        case 'USER_ALREADY EXISTS':
            return {
                ...state,
                msg: 'User Already Exists'
            }
        case 'USER_CREATED_SUCCESSFULLY':
            return {
                ...state,
                msg: action.data.userName + " Profile Created Successfuly"
            }

        case 'LOGGED_USER':
            return {
                ...state,
                loggedUser: action.data
            }
        default:
            return state
    }
}


const productData = (state = { products }, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    auth,
    productData
});