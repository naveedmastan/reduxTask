import { combineReducers } from 'redux';

const initialState = {
    isAuth: false,
    users: [],
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
        case 'LOG_OUT':
            return {
                ...state,
                isAuth: false,
                msg: undefined
            }
        case 'ADD_USER':
            return {
                ...state,
                users: action.users
            }
        case 'CLEAR_MSG':
            return {
                ...state,
                msg: ""
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
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.users
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


const productData = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        default:
            return state
    }
}

export default combineReducers({
    auth,
    productData
});