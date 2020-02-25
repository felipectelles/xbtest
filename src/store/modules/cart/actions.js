import { ADD_TO_CART, RESET_CART } from "../../../constants/action-types";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function resetCart() {
  return {
    type: RESET_CART,
  };
}
