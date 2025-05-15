import { GET_ALL_PRODUCT, GET_PRODUCT, POST_PRODUCT } from "../actions/productActions.js";

const initialState = {
  product: [],
  productDetails: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT: 
        return {...state, product: action.payload };
        case GET_PRODUCT:
        return {...state, productDetails: action.payload };
        case POST_PRODUCT:
        return {...state, product: action.payload };
        default:
            return {...state};
    }
}

export default productReducer; 