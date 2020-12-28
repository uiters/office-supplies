import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
  ActivityIndicator
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";
import HomeScreenCategoryItem from "../components/homescreen/HomeScreenCategoryItem";
import SignUpButton from "../components/sharedcomponents/SignUpButton";
import baseURL from "../api/BaseURL";

import { useDispatch } from "react-redux";

const SignUpScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [retypedPassWord, setRetypedPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const signupHandler = () => {
    setLoading(true);
    if(email===""||passWord===""||retypedPassWord===""||name===""||phoneNumber===""){
      setLoading(false);
      Alert.alert(
        "Information has not been fully input!"
      );
    }
    if (retypedPassWord !== passWord) {
      setLoading(false);
      Alert.alert(
        "Retyped password and password do not match! Please type again!"
      );
    } else {
      fetch(baseURL+"/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: passWord,
          profile: {
            fullName: name,
            phoneNumber: phoneNumber,
          },
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
            if(json.hasOwnProperty("errors")){
                let error="";
                json.errors.forEach(element => {
                    error+=element.param+" : "+element.msg+"\n";
                });
                return Alert.alert("Error: "+"\n" + error);
            }
          return Alert.alert(json + " pass");
        })
        .catch((err) => Alert.alert("Error: " + err));
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
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.signUpTitle}>SIGN UP</Text>
          <View style={styles.infoContainer}>
            
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
              placeholder="Email*"
            />
          </View>
          <View style={styles.infoContainer}>
            
            <TextInput
              value={passWord}
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password*"
            />
          </View>
          <View style={styles.infoContainer}>
            
            <TextInput
              value={retypedPassWord}
              onChangeText={(text) => setRetypedPassword(text)}
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Retype Password*"
            />
          </View>
          <View style={styles.infoContainer}>
            
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.textInput}
              placeholder="Full Name*"
            />
          </View>
          <View style={styles.infoContainer}>
            <TextInput
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              style={styles.textInput}
              placeholder="Phone number*"
              keyboardType="numeric"
            />
          </View>
          <SignUpButton onPress={signupHandler} />
        </View>
      </ScrollView>
    </View>
  );}
};

const styles = StyleSheet.create({
  subContainer: {
    height: 620,
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 40,
    borderWidth: 1,
  },
  signUpTitle: {
    marginVertical: 50,
    marginLeft: 110,
    fontSize: 35,
    fontFamily: "IndieFlower-Regular",
  },
  container: {
    height: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginVertical: 15,
    alignItems: "center",
  },
  title: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 15,
  },
  textInput: {
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 5,
  },
});
export default SignUpScreen;
