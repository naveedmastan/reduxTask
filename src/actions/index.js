import axios from 'axios';
const apiUrl = 'http://localhost:8081';


export const authSuccess = (payload) => dispatch => {
    dispatch({
        type: 'AUTHENTICATION_SUCCESS',
        payload
    })
}


export const logout = () => (dispatch) => {
    dispatch({
        type: 'LOG_OUT',

    })
}


export const deleteUser = () => (dispatch, getState) => {

    axios.post(`${apiUrl}/deleteUser`, { id: getState().auth.loggedUser.id })
        .then(function (response) {
            dispatch({
                type: 'LOG_OUT',
            })
        })
        .catch(function (error) {
            dispatch({
                type: 'LOG_OUT',

            })
        });
        

}

export const addUser = (data, history) => (dispatch) => {

    axios.post(`${apiUrl}/addUser`, { data: data })
        .then(function (response) {

            if (response.data.err) {
                dispatch({
                    type: 'USER_ALREADY EXISTS',

                })
            } else {
                dispatch({
                    type: 'ADD_USER',
                    users: response.data
                })
                history.push('/')
                dispatch({
                    type: 'USER_CREATED_SUCCESSFULLY',
                    data
                })
            }
        })
        .catch(function (error) {
            dispatch({
                type: 'USER_ALREADY EXISTS',
                data
            })
        });
}


export const updateUser = (data, history) => (dispatch, getState) => {


    axios.post(`${apiUrl}/updateUser`, { data: data, id: getState().auth.loggedUser.id })
        .then(function (response) {

            if (response.data.err) {
                dispatch({
                    type: 'NO_CHANGES',

                })
            } else {
                dispatch({
                    type: 'CLEAR_MSG',

                })
                dispatch({
                    type: 'LOGGED_USER',
                    data: response.data.user
                })
                history.push('/viewProducts')
                dispatch({
                    type: 'UPDATE_USERS',
                    users: response.data.users
                })
            }
        })
        .catch(function (error) {
            dispatch({
                type: 'NO_CHANGES',

            })
        });




}


export const validateUser = (data, history) => (dispatch, getState) => {

    axios.post(`${apiUrl}/validateUser`, { data: data })
        .then(function (response) {

            if (response.data.err) {
                dispatch({
                    type: 'AUTHENTICATION_FAILURE',
                })
            } else {
                dispatch({
                    type: 'AUTHENTICATION_SUCCESS',
                    payload: true
                })

                dispatch({
                    type: 'LOGGED_USER',
                    data: response.data
                })
                history.push('/viewProducts')
            }
        })
        .catch(function (error) {
            dispatch({
                type: 'AUTHENTICATION_FAILURE',
            })
        });
}

export const getAllUsers = () => (dispatch) => {
    axios.get(`${apiUrl}/allUsers`)
        .then(function (response) {
            dispatch({
                type: 'GET_ALL_USERS',
                users: response.data
            })
        })
        .catch(function (error) {
            
        });
}

export const getAllProducts = () => (dispatch) => {
    axios.get(`${apiUrl}/getProducts`)
        .then(function (response) {
            dispatch({
                type: 'GET_PRODUCTS',
                products: response.data
            })
        })
        .catch(function (error) {
            
        });
}