// reducers/orderReducer.js
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR
  } from '../actions/orderActions';
  
  const initialState = {
    loading: false,
    success: false,
    order: null,
    error: null,
  };
  
  export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ORDER_REQUEST:
        return { ...state, loading: true };
  
      case CREATE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          order: action.payload,
          error: null,
        };
  
      case CREATE_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
       
      case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
      };
    case FETCH_ORDER_ERROR:
      return {
        ...state,
        error: action.error,
      };

      default:
        return state;
    }
  };
  