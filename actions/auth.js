/* eslint-disable */
import { LOGOUT, LOGIN, RETRIEVE_TOKEN } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function login() {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem('user', 'user')
    } catch (error) {
      console.error(error);
    }
    dispatch({ type: LOGIN });
  };

}

export function logout() {
  return async (dispatch) => {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.error(error);
    }
    dispatch({ type: LOGOUT });
  };
}

export function getToken(token) {
  return {
    type: RETRIEVE_TOKEN,
    payload: token,
  };
}

export function retrieveToken() {
  return async (dispatch) => {
    let token;
    try {
      token = await AsyncStorage.getItem('user');
    } catch (error) {
      console.error(error);
    }
    dispatch(getToken(token))
  };
}
