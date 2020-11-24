import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { SIGNOUT, SIGNIN } from './Types';
import {
    ADDTOSHOPPINGCART,
    GETSHOPPINGCART,
    REMOVEFROMSHOPPINGCART,
    UPDATESHOPPINGCART,
} from './Types';
import { ADDTOBOOKMARK, GETBOOKMARK, REMOVEFROMBOOKMARKS } from './Types';

//auth
export const signInRequest = (candidateUser) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://192.168.1.76:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: candidateUser.email,
                    password: candidateUser.password,
                }),
            });
            const token = await response.json();
            if (token) {
                console.log(token)
                dispatch({ type: SIGNIN, token: token });
            }
        } catch (error) {
            console.log('Wrong email or password');
        }

        // fetch('http://192.168.1.194:3000/api/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: candidateUser.email,
        //         password: candidateUser.password,
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((json) => {
        //       console.log(json)
        //         dispatch({ type: SIGNIN, token: json.token });
        //     })
        //     .catch(console.log);
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

// bookmarks
export const addToBookMark = (item) => {
  return (dispatch) => dispatch({ type: ADDTOBOOKMARK, item: item });
};

export const getBookMark = () => {
    return (dispatch) => dispatch({ type: GETBOOKMARK });
};

export const removeFromgetBookMark = (index) => {
  return (dispatch) => dispatch({ type: REMOVEFROMBOOKMARKS, index: index });
};
