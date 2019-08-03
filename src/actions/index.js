


export const authSuccess = (payload) => dispatch => {
    dispatch({
        type: 'AUTHENTICATION_SUCCESS',
        payload
    })
}


export const addUser = (data, history) => (dispatch, getState) => {
    let { users } = getState().auth;
    let count = 0;
    users.forEach((user) => {
        if (user.userName === data.userName) {
            dispatch({
                type: 'USER_ALREADY EXISTS',
                data
            })
        } else {
            count++;
        }
    })

    if (count === users.length) {
        data.id = Math.random().toString(36).slice(2);
        users.push(data)
        dispatch({
            type: 'ADD_USER',
            users: users
        })
        history.push('/')
        dispatch({
            type: 'USER_CREATED_SUCCESSFULLY',
            data
        })
    }

}


export const updateUser = (data) => (dispatch, getState) => {
    let { users } = getState().auth;
    dispatch({
        type: 'LOGGED_USER',
        data
    })
    let status = false;
    users.forEach((user, index) => {
        if (user.id === data.id) {
            status = true;
            users[index] = data
        }
    })
    if (status) {
        dispatch({
            type: 'ADD_USER',
            users: users
        })
    }


}


export const validateUser = (data, history) => (dispatch, getState) => {
    let { users } = getState().auth;
    let count = 0;

    users.forEach((user) => {
        if ((user.userName === data.userName && user.password === data.password)) {
            dispatch({
                type: 'AUTHENTICATION_SUCCESS',
                payload: true
            })
            dispatch({
                type: 'LOGGED_USER',
                data
            })
        } else {
            count++;
        }
    })

    if (count === users.length) {
        dispatch({
            type: 'AUTHENTICATION_FAILURE',
        })
    } else {
        history.push('/profile')
    }
}