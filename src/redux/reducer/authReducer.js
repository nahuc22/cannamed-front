import { AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS, AUTH_REGISTER_FAILURE, AUTH_LOGIN_REQUEST,AUTH_LOGIN_SUCCESS,AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT } from "../actions/authActions.js";

  const token = localStorage.getItem("token");

  const initialState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  };
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTH_REGISTER_REQUEST:
        return { ...state, loading: true, error: null };

      case AUTH_REGISTER_SUCCESS:
        return { ...state, loading: false, user: action.payload };

      case AUTH_REGISTER_FAILURE:
        return { ...state, loading: false, error: action.payload };

      case AUTH_LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
      case AUTH_LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          isLoggedIn: action.payload.isLoggedIn,
          loading: false,
          error: null,
        };
      case AUTH_LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };

      case AUTH_LOGOUT:
        return { ...initialState };
      default:
        return state;
    }
}

export default authReducer; 