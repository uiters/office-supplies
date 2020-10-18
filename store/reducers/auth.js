import { LOGIN, SIGNUP } from '../actions/auth';

const initialState = {
  token: null,
  email: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        email: action.email
      };
    case SIGNUP:
      return {
        token: action.token,
        email: action.email
      };
    default:
      return state;
  }
};
