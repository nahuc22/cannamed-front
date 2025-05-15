import axios from "axios";

export const CREATE_PAYMENT_SUCCESS = 'CREATE_PAYMENT_SUCCESS';
export const CREATE_PAYMENT_ERROR = 'CREATE_PAYMENT_SUCCESS';

export const createPayment = (orderId) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3001/pay/create", { orderId });

    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: data.preferenceId, // Ahora guardamos el preferenceId
    });
  } catch (error) {
    console.error("Error creando el pago", error);
    dispatch({
      type: CREATE_PAYMENT_ERROR,
      payload: error.message,
    });
  }
};