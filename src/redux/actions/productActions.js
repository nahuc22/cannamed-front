 import axios from "axios";
export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const GET_PRODUCT = "GET_PRODUCT";
export const POST_PRODUCT = "POST_PRODUCT";

export const getAllProduct = () => {
    return async function (dispatch) {
      try {
        const apiData = await axios.get("https://cannamed-back.onrender.com/products");
        const products = apiData.data;
        dispatch({ type: GET_ALL_PRODUCT, payload: products });
      } catch (error) {}
    };
  };
  
  export const getProduct = (id) => {
    return async function (dispatch) {
      try {
        const apiData = await axios.get(`http://localhost:3001/products/${id}`);
        console.log(apiData);
        const product = apiData.data;
        dispatch({ type: GET_PRODUCT, payload: product });
      } catch (error) {}
    };
  };
  export const postProduct = (id) => {
    return async function (dispatch) {
      try {
        const apiData = await axios.post(`http://localhost:3001/products`);
        const product = apiData.data;
        dispatch({ type: POST_PRODUCT, payload: product });
      } catch (error) {}
    };
  };