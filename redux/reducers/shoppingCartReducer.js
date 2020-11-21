import {
  ADDTOSHOPPINGCART,
  GETSHOPPINGCART,
  REMOVEFROMSHOPPINGCART,
  UPDATESHOPPINGCART,
} from "../actions/Types";

const initialState = {
  shoppingCart: [],
  total: 0,
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTOSHOPPINGCART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.item],
        total: state.total + action.item.price * action.item.quantity,
      };
    case REMOVEFROMSHOPPINGCART:
      return {
        ...state,
        total:
          state.total -
          state.shoppingCart.find((item) => item.id === action.id).price *
            state.shoppingCart.find((item) => item.id === action.id).quantity,
        shoppingCart: [
          ...state.shoppingCart.filter((item) => item.id !== action.id),
        ],
      };
    default:
      return state;
  }
}
