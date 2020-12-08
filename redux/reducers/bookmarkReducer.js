import {
  ADDTOBOOKMARK,
  GETBOOKMARK,
  REMOVEFROMBOOKMARKS,
  REMOVEEVERYBOOKMARKS,
} from "../actions/Types";

const initialState = {
  bookmarks: [],
};

export default function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTOBOOKMARK:
      const foundItem = state.bookmarks.find(
        (item) => item.email === action.email
      );
      state.bookmarks.push({ email: action.email, bookMarkedItems: [action.item] });
      if (!foundItem) {
        return {
          ...state,
          bookmarks: [
            ...state.bookmarks,
          ],
        };
      } else {
        const index = state.bookmarks.indexOf(foundItem);
        state.bookmarks[index].bookMarkedItems.push(action.item);
        return {
          ...state,
          bookmarks: [
            ...state.bookmarks,    
          ],
        };
      }
    case GETBOOKMARK:
      return state;
    case REMOVEFROMBOOKMARKS:
      const foundedItem = state.bookmarks.find(
        (item) => item.email === action.email
      );
      const index = state.bookmarks.indexOf(foundedItem);
      const arr = state.bookmarks[index].bookMarkedItems.filter(item => item.id !== action.id)
      state.bookmarks[index].bookMarkedItems=arr;
        return {
          ...state,
          bookmarks: [
            ...state.bookmarks,    
          ],
        };
    case REMOVEEVERYBOOKMARKS:
      return {
        ...state,
        bookmarks: [],
      };
    default:
      return state;
  }
}
