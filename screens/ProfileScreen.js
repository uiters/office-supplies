import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import SaveButton from "../components/sharedcomponents/SaveButton"
import NavigateToChangePasswordScreenButton from "../components/sharedcomponents/NavigateToChangePasswordScreenButton";
import { useSelector, useDispatch } from "react-redux";
import baseURL from "../api/BaseURL"

const ProfileScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userID, setUserID] = useState("");

  useEffect(() => {
    console.log(token);
    onGetUserInformation(token);
  },[token]);

  const onGetUserInformation = async (token) => {
    try {
      await console.log(token);
      const response = await fetch(baseURL+"/user/me", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": token,
        },
      });
      if (response.ok) {
        const user = await response.json();
        console.log(user);
        setPhoneNumber(user.profile.phoneNumber)
        setFullName(user.profile.fullName);
        setEmail(user.email);
        setUserID(user.id);
      } else {
        return response.status;
      }
    } catch (error) {
      console.log(error.status);
    }
  };

  const onSaveProfile = () => {

  }

  return (
    <View style={styles.container}>
        <Text style={styles.Text}>Email:</Text>
        <TextInput 
        style={styles.TextInput}
        value={email}
        onChangeText = {(text) => setEmail(text)}/>
        <Text style={styles.Text}>Full Name:</Text>
        <TextInput 
        style={styles.TextInput}
        value={fullName}
        onChangeText = {(text) => setFullName(text)}/>
        <Text style={styles.Text}>Phone Number:</Text>
        <TextInput 
        style={styles.TextInput}
        value={phoneNumber}
        onChangeText = {(text) => setPhoneNumber(text)}/>
        <SaveButton onPress={onSaveProfile}/>
        <NavigateToChangePasswordScreenButton onPress={()=>navigation.navigate("ChangePassword")}/>        
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    width:"100%",
    height:"100%",
    marginTop:15,
    alignItems:"center"
  },
  subContainer:{
    marginTop:20,
    flexDirection:"row",
    height:150,
    width:"100%"
  },
  Text:{
    fontFamily:"sans-serif",
    fontWeight:"bold",
    fontSize:20,
    marginBottom:10
  },
  TextInput:{
    width:"80%",
    height:50,
    marginBottom:20
  }
});
export default ProfileScreen;
