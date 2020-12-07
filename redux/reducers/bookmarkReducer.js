import {
  ADDTOBOOKMARK,
  GETBOOKMARK,
  REMOVEFROMBOOKMARKS,
} from "../actions/Types";

const initialState = {
  bookmarks: [],
};

export default function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTOBOOKMARK:
      const foundItem = state.bookmarks.find(
        (item) => item.token === action.token
      );
      if (!foundItem) {
        return {
          ...state,
          bookmarks: [
            ...state.bookmarks,
            { token: action.token, bookMarkedItems: [action.item] },
          ],
        };
      } else {
        const index = state.bookmarks.indexOf(foundItem);
        const arr = [...state.bookmarks.bookMarkedItems, action.items];
        state.bookmarks.bookMarkedItems[index] = arr;
        return {
          ...state,
          bookmarks: [...state.bookmarks],
        };
      }
    case GETBOOKMARK:
      return state;
    case REMOVEFROMBOOKMARKS:
      return {
        ...state,
        shoppingCart: [
          ...state.bookmarks
            .find((item) => item.token === action.token)
            .bookMarkedItems.filter((item) => item.id !== action.item.id),
        ],
      };
    default:
      return state;
  }
}
