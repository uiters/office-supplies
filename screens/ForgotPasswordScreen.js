import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  Alert
} from "react-native";
import { TextInput } from "react-native-paper";
import ConfirmForgotPassword from "../components/sharedcomponents/ConfirmForgotPasswordButton";

const ForgotPasswordScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const onConfirmForgotPassword = () => {
    if (email === "") {
      Alert.alert(
        "Please type in your email!"
      );
    } else {
      fetch("http://192.168.1.8:3000/api/user/forgot-password", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((response) => response.json())
        .then((json) => {console.log(json+"")})
        .catch((err) => Alert.alert("Error: " + err));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Please type in your email:</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email*"
        style={styles.TextInput}
      />
      <ConfirmForgotPassword onPress={onConfirmForgotPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: 15,
  },
  subContainer: {
    marginTop: 20,
    flexDirection: "row",
    height: 150,
    width: "100%",
  },
  Text: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  TextInput: {
    width: "80%",
    height: 50,
  },
});
export default ForgotPasswordScreen;
