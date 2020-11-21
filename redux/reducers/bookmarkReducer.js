import {ADDTOBOOKMARK, GETBOOKMARK, REMOVEFROMBOOKMARKS} from "../actions/Types";

const initialState = {
    bookmarks:[],
}

export default function bookmarkReducer(state = initialState, action){
    switch(action.type){
        case ADDTOBOOKMARK:
            return {...state, bookmarks:bookmarks.push(action.item)};
        case GETBOOKMARK:
            return state;
        case REMOVEFROMBOOKMARKS:
            return {...state, bookmarks:bookmarks.filter(item => item.id !== action.index)};
        default:
            return state;    
    }
}