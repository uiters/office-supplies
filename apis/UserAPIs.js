import { Value } from "react-native-reanimated";
import apiService from "./apiservice";

const TEST_LOGIN_URL = "http://192.168.1.7:3000/api/auth/login";

/*export const login = (user) => {
    return apiService('POST', TEST_LOGIN_URL, user)
}*/

export const login = async (user) => {
  await fetch("http://192.168.1.7:3000/api/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("Return value", json);
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};
