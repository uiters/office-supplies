import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { SIGNOUT, SIGNIN} from "./Types";
import {ADDTOSHOPPINGCART, GETSHOPPINGCART, REMOVEFROMSHOPPINGCART, UPDATESHOPPINGCART} from "./Types";
import {ADDTOBOOKMARK, GETBOOKMARK, REMOVEFROMBOOKMARKS} from "./Types";




//auth
export const signInRequest = (candidateUser) => {
  return async (dispatch) => {
    await fetch("http://192.168.1.7:3000/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: candidateUser.email,
        password: candidateUser.password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: SIGNIN, token: json.token });
      })
      .catch(console.log("Wrong pass or account!"));
  };
};

export const signOutRequest = () => {
  return (dispatch) => dispatch({ type: SIGNOUT });
};


// shopping cart
export const addToShoppingCart = (item) => {
  return (dispatch) => dispatch({ type: ADDTOSHOPPINGCART, item:item });
};

export const getShoppingCart = () => {
  return (dispatch) => dispatch({ type: GETSHOPPINGCART });
};

export const removeFromShoppingCart = (id) => {
  return (dispatch) => dispatch({ type: REMOVEFROMSHOPPINGCART, id:id });
}

export const updateShoppingCart = (index, quantity) => {
  return (dispatch) => dispatch({ type: UPDATESHOPPINGCART, quantity:quantity, index:index });
};

// bookmarks
export const addToBookMark = (item) => {
  return (dispatch) => dispatch({ type: ADDTOBOOKMARK, item:item });
};

export const getBookMark = () => {
  return (dispatch) => dispatch({ type: GETBOOKMARK });
};

export const removeFromgetBookMark= (index) => {
  return (dispatch) => dispatch({ type: REMOVEFROMBOOKMARKS, index:index });
}

