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


const ChangePasswordScreen = ({ route, navigation }) => {
    const onChangePassword = () =>{

    }
  return (
    <View style={styles.container}>
        <Text style={styles.Text}>Current Password:</Text>
        <TextInput style={styles.TextInput}/>
        <Text style={styles.Text}>New Password:</Text>
        <TextInput style={styles.TextInput}/>
        <Text style={styles.Text}>Retype new password:</Text>
        <TextInput style={styles.TextInput}/>
        <SaveButton onPress={onChangePassword}/>
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
export default ChangePasswordScreen;
