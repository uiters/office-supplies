export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const signup = (email, password, name, phoneNumber) => {
  let resData;
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        profile: { firstName: name, phoneNumber: phoneNumber },
      }),
    }).then((resp) => {
      let json = resp.json();
     if (resp.status >= 200 && resp.status < 300) {
       resData=json;
       console.log(json);
        return json;
      } else {
        return json.then(Promise.reject.bind(Promise));
      }
    });

    /*
    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_EXISTS") {
        message = "This email exists already!";
      }
      throw new Error(message);
    }*/
    dispatch({ type: SIGNUP });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid!";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    return { type: LOGIN, token: resData.idToken, email: resData.email };
  };
};
