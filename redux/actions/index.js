import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { SIGNOUT, SIGNIN } from "./Types";
import {
  ADDTOSHOPPINGCART,
  REMOVEEVERYTHING,
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
        dispatch({ type: SIGNIN, token: token, email:candidateUser.email});
        return "token";
      }else {
        return response.status;
      }
    } catch (error) {
      console.log(error);
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

export const updateShoppingCart = (id, quantity, token) => {
  return async (dispatch) => {
    try{
      const response = await fetch(baseURL+"/product/product-id/"+id, {
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization":token
        }
      });
      if(response.ok){
        const json = await response.json();
        if(json.quantity>=parseInt(quantity)){
          return dispatch({ type: UPDATESHOPPINGCART, id: id, quantity: quantity })
        }else{
          return 0;
        }
      }
    }catch(err){
      console.log(err.status);
    }
  }
};

export const removeEverything = () => {
  return (dispatch) => dispatch({ type: REMOVEEVERYTHING});
}

// bookmarks
export const addToBookMark = (token,item) => {
  return (dispatch) => dispatch({ type: ADDTOBOOKMARK, token:token, item: item });
};

export const getBookMark = () => {
  return (dispatch) => dispatch({ type: GETBOOKMARK });
};

export const removeFromBookMark = (token,item) => {
  return (dispatch) => dispatch({ type: REMOVEFROMBOOKMARKS, token:token, item: item });
};

