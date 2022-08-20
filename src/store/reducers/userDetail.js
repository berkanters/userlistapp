import { GET_USERDETAIL_FAIL, GET_USERDETAIL_REQUEST, GET_USERDETAIL_SUCCESS } from "../actions/actionType";

const initialState = {
  users: [],
  loading: false,
};
const getUserDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERDETAIL_REQUEST:
      return {
        loading: true,
        users: [],
      };

    case GET_USERDETAIL_SUCCESS:
      return { ...state, users: action.payload, loading: false };

    case GET_USERDETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getUserDetail;
