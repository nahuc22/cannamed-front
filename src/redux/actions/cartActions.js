import axios from "axios";

export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL";
export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILURE = 'GET_CART_FAILURE';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const addToCart = (product) => async (dispatch, getState) => {
  try {
    // Obtener el userId y el token desde el estado
    const userId = getState().auth.user?.id || localStorage.getItem('userId');
    const token = getState().auth.user?.token || localStorage.getItem("token");

    if (!userId) {
      throw new Error("Usuario no autenticado. Por favor, inicia sesión.");
    }

    const config = {
      headers: {
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}`, 
      },
    };

    const cartData = {
      userId: userId, 
      productId: product.id,
      quantity: 1,
    };


    const response = await axios.post(
      "http://localhost:3001/cart/add",
      cartData,
      config
    );


    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: response.data.cartItems,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error.response?.data?.message || error.message || "Error al agregar al carrito",
    });
  }
};

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const token = localStorage.getItem('token'); // 🧠 Obtené el token

    const response = await axios.get('http://localhost:3001/cart', {
      headers: {
        Authorization: `Bearer ${token}` // 🔐 Pasá el token en el header
      },
    });

    const data = response.data;

    dispatch({
      type: GET_CART_SUCCESS,
      payload: {
        items: data.cartItems,
        cartId: data.id, // <-- asegurate que el backend te lo devuelva como `id`
      },
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAILURE,
      payload: error.response?.data?.message || 'Error al obtener el carrito',
    });
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`http://localhost:3001/cart/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`, // si usás auth
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al eliminar del carrito");
    }

    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  } catch (error) {
    console.error("Error al eliminar del carrito:", error.message);
  }
};

export const increaseQuantity = (productId) => ({
  type: INCREASE_QUANTITY,
  payload: productId,
});

export const decreaseQuantity = (productId) => ({
  type: DECREASE_QUANTITY,
  payload: productId,
});