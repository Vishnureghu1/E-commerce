import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("https://dummyjson.com/products").then((response) => {
    commit("SET_PRODUCTS", response.data.products);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios.get(`https://dummyjson.com/products/${productId}`).then((response) => {
    commit("SET_PRODUCT", response.data);
  });
};
