import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_REQUEST } from '../actions/actionType';

const initialState = {
  users: [],
  loading: false,
};
const getUserList = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        loading: true,
        users: [],
      };

    case GET_USER_SUCCESS:
      return { ...state, users: action.payload, loading: false };

    case GET_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getUserList;
