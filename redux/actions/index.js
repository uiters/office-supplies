import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { SIGNOUT, SIGNIN } from "./Types";

export const signIn = (token) => ({
  type: SIGNIN,
  payload: {token} ,
});
export const signOut = () => ({ type: SIGNOUT });

export const signInRequest = (candidateUser) => {
  return async (dispatch) => {
    await fetch("http://192.168.1.10:3000/api/auth/login", {
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
        dispatch({type:SIGNIN, token: json.token});
      }).catch(console.log("Wrong pass or account!"))
  }
};


