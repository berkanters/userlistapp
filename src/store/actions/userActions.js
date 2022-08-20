import * as types from '../actions/actionType';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/users';

export const getUserList = () => {
  try {
    return async dispatch => {
      const res = await axios.get(API_URL);
      dispatch({
        type: types.GET_USER_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_USER_SUCCESS,
          payload: res.data.users,
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_USER_FAIL,
      payload: error.message,
    });
  }
};

export const getUserDetail = (id) => {
  try {
    return async dispatch => {
      const res = await axios.get(`${ API_URL }/${id}`);
      dispatch({
        type: types.GET_USERDETAIL_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_USERDETAIL_SUCCESS,
          payload: res.data,
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_USERDETAIL_FAIL,
      payload: error.message,
    });
  }
};
