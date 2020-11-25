import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { SIGNOUT, SIGNIN } from "./Types";
import {
  ADDTOSHOPPINGCART,
  GETSHOPPINGCART,
  REMOVEFROMSHOPPINGCART,
  UPDATESHOPPINGCART,
} from "./Types";
import { ADDTOBOOKMARK, GETBOOKMARK, REMOVEFROMBOOKMARKS } from "./Types";
import baseURL from "../../api/BaseURL";

//auth
export const signInRequest = (candidateUser) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseURL+"/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: candidateUser.email,
          password: candidateUser.password,
        }),
      });
      if(response.ok){
        const token = await response.json();
        dispatch({ type: SIGNIN, token: token });
        return "token";
      }else {
        return response.status;
      }
    } catch (error) {
      console.log(error.status);
      //return error.status;
    }
  };
};

export const signOutRequest = () => {
  return (dispatch) => dispatch({ type: SIGNOUT });
};

// shopping cart
export const addToShoppingCart = (item) => {
  return (dispatch) => dispatch({ type: ADDTOSHOPPINGCART, item: item });
};

export const removeFromShoppingCart = (id) => {
  return (dispatch) => dispatch({ type: REMOVEFROMSHOPPINGCART, id: id });
};

// bookmarks
export const addToBookMark = (item) => {
  return (dispatch) => dispatch({ type: ADDTOBOOKMARK, item: item });
};

export const getBookMark = () => {
  return (dispatch) => dispatch({ type: GETBOOKMARK });
};

export const removeFromgetBookMark = (index) => {
  return (dispatch) => dispatch({ type: REMOVEFROMBOOKMARKS, index: index });
};

