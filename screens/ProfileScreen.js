import React from "react";
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


const ProfileScreen = ({ route, navigation }) => {

  const onSaveProfile = () => {

  }

  return (
    <View style={styles.container}>
        <Text style={styles.Text}>Username:</Text>
        <TextInput style={styles.TextInput}/>
        <Text style={styles.Text}>Email:</Text>
        <TextInput style={styles.TextInput}/>
        <Text style={styles.Text}>Phone:</Text>
        <TextInput style={styles.TextInput}/>
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
    marginTop:15
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
  }
});
export default ProfileScreen;
