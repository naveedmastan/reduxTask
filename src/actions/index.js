import axios from 'axios'


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

    axios.post('http://localhost:8081/deleteUser', { id: getState().auth.loggedUser.id })
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

    axios.post('http://localhost:8081/addUser', { data: data })
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


    axios.post('http://localhost:8081/updateUser', { data: data, id: getState().auth.loggedUser.id })
        .then(function (response) {

            if (response.data.err) {
                dispatch({
                    type: 'NO_CHANGES',

                })
            } else {
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

    axios.post('http://localhost:8081/validateUser', { data: data })
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