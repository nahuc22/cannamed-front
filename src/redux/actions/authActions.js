import axios from "axios";
import { jwtDecode } from "jwt-decode";


//REGISTRO
export const AUTH_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const AUTH_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const AUTH_REGISTER_FAILURE = "USER_REGISTER_FAILURE";

export const registerUser = (userData) => async (dispatch) => {
    dispatch({ type: AUTH_REGISTER_REQUEST });

    try {
        const { data } = await axios.post("http://localhost:3001/auth/register", userData);
        console.log(data)
        dispatch({ type: AUTH_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ 
            type: AUTH_REGISTER_FAILURE, 
            payload: error.response?.data?.message || "Error en el registro" 
        });
    }
};

// LOGIN
export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE";

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_REQUEST });

  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error en el login");
    }

    localStorage.setItem("token", data.user.token);
    localStorage.setItem("userId", data.user.id);

    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: { user: data.user, isLoggedIn: true },
    });

    return { success: true, user: data.user }; // ✅ devuelve también el user
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_FAILURE, payload: error.message });
    return { success: false, message: error.message };
  }
};


  export const checkAuth = () => async (dispatch) => {
    const token = localStorage.getItem("token");
  
    if (!token) return;
  
    try {
      const decoded = jwtDecode(token);
  
      // Opcional: podés verificar si el token expiró
      const currentTime = Date.now() / 1000;
      if (decoded.exp && decoded.exp < currentTime) {
        dispatch({ type: AUTH_LOGOUT });
        return;
      }
  
      const user = {
        id: decoded.id,
        email: decoded.email,
        token,
      };
  
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: { user, isLoggedIn: true },
      });
    } catch (error) {
      console.error("Error al decodificar token:", error);
      dispatch({ type: AUTH_LOGOUT });
    }
  };


/* LOGOUT */
export const AUTH_LOGOUT = "AUTH_LOGOUT";

  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch({ type: AUTH_LOGOUT });
  };