import {SIGNIN, SIGNOUT} from '../actions/Types';

const initialState = {
  isAuthenticate:false,
  token:"",
  email:""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
    return {...state,isAuthenticate:true, token:action.token, email:action.email};

    case SIGNOUT:
      return {...state,isAuthenticate:false, token:""};

    default:
      return state;
  }
}