import React, {useState, useEffect} from "react";
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
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log(token);
    onGetUserInformation(token);
  },[token]);

  const onGetUserInformation = async (token) => {
    setLoading(true);
    try {
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
        setPhoneNumber(user.profile.phoneNumber)
        setFullName(user.profile.fullName);
        setEmail(user.email);
        setUserID(user.id);
        setLoading(false);
      } else {
        return response.status;
      }
    } catch (error) {
      console.log(error.status);
    }
  };

  const onChangeProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(baseURL+"/user", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body:JSON.stringify({
          id:userID,
          profile:{
            fullName:fullName,
            phoneNumber:phoneNumber
          }
        })
      });
      if (response.ok) {
        setLoading(false);
        Alert.alert("Profile Information Updated Sucessfully");
      } else {
        setLoading(false);
        Alert.alert(response.status+", "+response.json());
      }
    } catch (error) {
      console.log(error.status);
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
        onChangeText = {(text) => setPhoneNumber(text)}
        keyboardType="numeric"/>
        <SaveButton onPress={onChangeProfile}/>
        <NavigateToChangePasswordScreenButton onPress={()=>navigation.navigate("ChangePassword")}/>        
    </View>
  );}
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
