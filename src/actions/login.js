export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_PENDING = 'LOGIN_PENDING';

export default (email, password) => {
    return (dispatch) => {
        dispatch({type: LOGIN_PENDING});
        dispatch({type: LOGIN_SUCCESS});
        dispatch({type: LOGIN_ERROR});
    };
}
