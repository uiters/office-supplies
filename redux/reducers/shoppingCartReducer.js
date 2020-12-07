import { FontDisplay } from "expo-font";
import { ADDTOSHOPPINGCART, REMOVEFROMSHOPPINGCART, UPDATESHOPPINGCART, REMOVEEVERYTHING } from "../actions/Types";

const initialState = {
  shoppingCart: [],
  total: 0,
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTOSHOPPINGCART:
      const foundItem = state.shoppingCart.find(
        (item) => item.id === action.item.id
      );
      console.log(foundItem);
      if (!foundItem) {
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, action.item],
          total: state.total + action.item.price * action.item.quantity,
        };
      } else {
        const index = state.shoppingCart.indexOf(foundItem);
        const object = {
          ...state.shoppingCart[index],
          quantity:parseInt(foundItem.quantity)+parseInt(action.item.quantity)
        }
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
    case UPDATESHOPPINGCART:
      const foundedItem = state.shoppingCart.find(
        (item) => item.id === action.id
      );
      const oldQuantity = foundedItem.quantity;
      const index = state.shoppingCart.indexOf(foundedItem);
        const object = {
          ...state.shoppingCart[index],
          quantity:parseInt(action.quantity)
        }
        state.shoppingCart[index]=object
        return {
          ...state,
          total:
            state.total - (foundedItem.price * oldQuantity) + 
            (foundedItem.price * action.quantity),
          shoppingCart: [
            ...state.shoppingCart
          ],
        };
    case REMOVEEVERYTHING:
      return{
        ...state,
        shoppingCart: [],
        total: 0,
      }        
    default:
      return state;
  }
}
