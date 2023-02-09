export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const SET_PRODUCT = (state, product) => {
  state.product = product;
};

export const ADD_TO_CART = (state, { product, quantity }) => {
  let productsInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  if (productsInCart) {
    productsInCart.quantity += quantity;
    return;
  }

  state.cart.push({
    product,
    quantity,
  });
};

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  state.cart = state.cart.filter((item) => {
    return item.product.id != product.id;
  });
};

export const CLEAR_CART_ITEMS = (state) => {
  state.cart = [];
};

export const PUSH_NOTIFICATION = (state, notifications) => {
  state.notifications.push({
    ...notifications,
    id: Math.random().toString(36) + Date.now().toString(36).substr(2),
  });
};

export const SET_SEARCH_TEARM = (state, payload) => {
  state.userSearchTearm = payload;
};
