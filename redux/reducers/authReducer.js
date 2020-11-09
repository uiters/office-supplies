import {SIGNIN, SIGNOUT} from '../actions/Types';

const initialState = {
  isAuthenticate:false,
  token:""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
    return {...state,isAuthenticate:true, token:action.token};

    case SIGNOUT:
      return {...state,isAuthenticate:false};

    default:
      return state;
  }
}