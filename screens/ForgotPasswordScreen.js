import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator
} from "react-native";
import { TextInput } from "react-native-paper";
import ConfirmForgotPassword from "../components/sharedcomponents/ConfirmForgotPasswordButton";
import baseURL from "../api/BaseURL";

const ForgotPasswordScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const onConfirmForgotPassword = async () => {
    setLoading(true);
    if (email === "") {
      setLoading(false);
      Alert.alert("Please type in your email!");
    } else {
      try {
        const response = await fetch(baseURL + "/user/forgot-password", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        });
        if(response.ok){
          const json = await response.json()
          setLoading(false);
          Alert.alert(JSON.stringify(json));
          navigation.goBack();
        }
      } catch (err) {
        setLoading(false);
        Alert.alert(error.status);
      }
    }
  };
if(loading){
  return (
    <ActivityIndicator
      size="large"
      color="#E0E0E0"
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    />
  );
}else{
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
  );}
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
