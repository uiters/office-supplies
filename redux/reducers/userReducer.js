import { ADDUSERID } from "../actions/Types";

const initialState = {
  id: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADDUSERID:
      return { ...state, id: action.id };
    default:
      return state;
  }
}
