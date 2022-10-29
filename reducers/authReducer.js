/* eslint-disable */
import { LOGIN, LOGOUT, RETRIEVE_TOKEN } from "../constants";
import { act } from "react-test-renderer";

const initialState = {
  user: null,
  loading: false
}

const authReducer = (state= initialState, action) => {
  console.log('payload', action.payload)
  switch(action.type) {
    case LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    case LOGIN: {
      return {
        ...state,
        user: 'user',
      };
    }
    case RETRIEVE_TOKEN: {
      return  {
        ...state,
        user: action.payload
      }
    }
    default :
      return state
  }
}

export default authReducer
