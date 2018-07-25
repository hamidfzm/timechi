export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_PENDING = 'REGISTER_PENDING';

export default (email, password) => {
    return (dispatch) => {
        dispatch({type: REGISTER_PENDING});
        dispatch({type: REGISTER_SUCCESS});
        dispatch({type: REGISTER_ERROR});
    };
}
