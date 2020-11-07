import { SIGNOUT, SIGNIN } from "./Types";
import {login} from "../../apis/UserAPIs";

export const signIn = (token) => ({
  type: SIGNIN,
  payload: {token} ,
});
export const signOut = () => ({ type: SIGNOUT });

export const signInRequest = (candidateUser) => {
  return async (dispatch) => {
    const token = await login(candidateUser);
    await console.log(token);
    if(token!=null)
    dispatch(signIn(token));
  };
};


