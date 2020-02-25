import { ADD_TO_CART, RESET_CART } from "../../../constants/action-types";

const initialState = {
  product: []
};

function cart(state = initialState, action) {
  switch(action.type){
    case ADD_TO_CART:
      return {
        product: [...state.product, action.product]
      };
    case RESET_CART:
      return {
        product: []
      };
    default:
      return state;
  }
}

export default cart;