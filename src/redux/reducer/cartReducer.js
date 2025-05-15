import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAIL, GET_CART_SUCCESS , GET_CART_FAILURE, GET_CART_REQUEST , REMOVE_FROM_CART , INCREASE_QUANTITY , DECREASE_QUANTITY} from "../actions/cartActions";

const initialState = {
  cartItems: [],
  cartId: null,
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {...state, cartItems: action.payload , error: null};
    case ADD_TO_CART_FAIL:
      return { ...state, error: action.payload};
    case GET_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_CART_SUCCESS:
      return { ...state, cartItems: action.payload.items, cartId: action.payload.cartId };
    case GET_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case REMOVE_FROM_CART:
      return {...state, cartItems: state.cartItems.filter(item => item.productId !== action.payload)};
    case INCREASE_QUANTITY:
      return {...state, cartItems: state.cartItems.map(item =>item.productId === action.payload ? { ...item, quantity: item.quantity + 1 }: item) };

    case DECREASE_QUANTITY:
      return {...state, cartItems: state.cartItems.map(item => item.productId === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item) };
    default:
      return state;
  }
};

export default cartReducer;