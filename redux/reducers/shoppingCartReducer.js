import { FontDisplay } from "expo-font";
import { ADDTOSHOPPINGCART, REMOVEFROMSHOPPINGCART } from "../actions/Types";

const initialState = {
  shoppingCart: [],
  total: 0,
};
const addToCart = (state = initialState,actionItem) => {
  const foundItem = state.shoppingCart.find(
    (item) => item.id === actionItem.id
  );
  console.log(foundItem);
  if (!foundItem) {
    console.log("not found!");
    console.log(state.shoppingCart)
    return {
      ...state,
      shoppingCart: [...state.shoppingCart, actionItem],
      total: state.total + actionItem.price * actionItem.quantity,
    };
  } else {
    console.log(state.shoppingCart)
    const index = state.shoppingCart.indexOf(foundItem);
    const object = {
      ...state.shoppingCart[index],
      quantity:foundItem.quantity+actionItem.quantity
    }
    return {
      ...state,
      total:
        state.total +
        actionItem.price * actionItem.quantity,
      shoppingCart: [
        ...state.shoppingCart,
        state.shoppingCart[index] = object,
      ],
    };
  }
};
export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTOSHOPPINGCART:
      const foundItem = state.shoppingCart.find(
        (item) => item.id === action.item.id
      );
      console.log(foundItem);
      if (!foundItem) {
        console.log("not found!");
        console.log(state.shoppingCart)
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, action.item],
          total: state.total + action.item.price * action.item.quantity,
        };
      } else {
        console.log(state.shoppingCart)
        const index = state.shoppingCart.indexOf(foundItem);
        const object = {
          ...state.shoppingCart[index],
          quantity:parseInt(foundItem.quantity)+parseInt(action.item.quantity)
        }
        console.log(object);
        state.shoppingCart[index]=object
        return {
          ...state,
          total:
            state.total +
            action.item.price * action.item.quantity,
          shoppingCart: [
            ...state.shoppingCart
          ],
        };
      }
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
