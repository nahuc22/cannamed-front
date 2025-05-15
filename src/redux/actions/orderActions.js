import axios from 'axios';

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_ERROR = 'FETCH_ORDER_ERROR';

export const createOrder = (orderData) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const {
      auth: { user },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.post('http://localhost:3001/order/create', orderData, config);

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });

    return data; // <--- RETORNA la orden creada

  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    throw error;
  }
}

export const getOrderById = (orderId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/order/${orderId}`);
    if (!response.ok) {
      throw new Error('No se pudo obtener la orden');
    }

    const orderData = await response.json();
    dispatch({
      type: FETCH_ORDER_SUCCESS,
      payload: orderData,
    });

    return orderData; // Devolvemos los datos para usar en el frontend
  } catch (error) {
    console.error('Error al obtener la orden:', error);
    dispatch({
      type: FETCH_ORDER_ERROR,
      error: error.message,
    });
    throw error; // Lanza el error para manejarlo en el componente
  }
};
