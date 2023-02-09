import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("https://dummyjson.com/products").then((response) => {
    localStorage.setItem("apiData", JSON.stringify(response.data.products));
    let data = JSON.parse(localStorage.getItem("apiData"));
    commit("SET_PRODUCTS", data);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios.get(`https://dummyjson.com/products/${productId}`).then((response) => {
    commit("SET_PRODUCT", response.data);
  });
};

export const addProductToCart = (
  { commit, dispatch },
  { product, quantity }
) => {
  console.log("productIdproductIdproductId", product);
  axios.get(`https://dummyjson.com/products/${product}`).then((response) => {
    const product = response.data;
    commit("ADD_TO_CART", { product, quantity });

    dispatch(
      "addNotification",
      {
        type: "sucess",
        message: "Product added to cart.",
      },
      { root: true }
    );
  });
};

export const removeProductFromCart = ({ commit, dispatch }, product) => {
  commit("REMOVE_PRODUCT_FROM_CART", product);
  dispatch(
    "removeNotification",
    {
      type: "sucess",
      message: "Product removed from the cart.",
    },
    { root: true }
  );

  axios.delete(`https://dummyjson.com/products/${product.id}`);
};

export const clearCartItems = ({ commit, dispatch }) => {
  commit("CLEAR_CART_ITEMS");

  dispatch(
    "removeNotification",
    {
      type: "sucess",
      message: "Product clear from the cart.",
    },
    { root: true }
  );
};

export const addNotification = ({ commit }, notifications) => {
  console.log("calling");
  commit("PUSH_NOTIFICATION", notifications);
};
