import { CREATE_PAYMENT_SUCCESS , CREATE_PAYMENT_ERROR} from "../actions/payActions"
const initialState = {
    preferenceId: null,
    loading: false,
    error: null,
  };
  
  export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PAYMENT_SUCCESS:
        return {
          ...state,
          preferenceId: action.payload,
          loading: false,
          error: null,
        };
      case CREATE_PAYMENT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  