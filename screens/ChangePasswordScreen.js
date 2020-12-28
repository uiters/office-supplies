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
import SaveButton from "../components/sharedcomponents/SaveButton";
import baseURL from "../api/BaseURL";
import { useSelector} from "react-redux";

const ChangePasswordScreen = ({ route, navigation }) => {
  const token = useSelector(state => state.auth.token);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypedNewPassword, setRetypedNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangePassword = async () => {
    setLoading(true);
    if(newPassword !== retypedNewPassword){
      setLoading(false);
      Alert.alert("Retyped new password and new password do not match!");
    }else{
      try {
        console.log(token);
        const response = await fetch(baseURL+"/user/change-password", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body:JSON.stringify({
            currentPassword:currentPassword,
            newPassword:newPassword
          })
        });
        if (response.ok) {
          setLoading(false);
          Alert.alert("Password changed");
          navigation.goBack();
        } else {
          setLoading(false);
          Alert.alert("Current password not match, please try again!");
        }
      } catch (error) {
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
      <Text style={styles.Text}>Current Password:</Text>
      <TextInput
        style={styles.TextInput}
        value={currentPassword}
        onChangeText={(text) => setCurrentPassword(text)}
        secureTextEntry={true}
      />
      <Text style={styles.Text}>New Password:</Text>
      <TextInput
        style={styles.TextInput}
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        secureTextEntry={true}
      />
      <Text style={styles.Text}>Retype new password:</Text>
      <TextInput style={styles.TextInput}
       value={retypedNewPassword}
       onChangeText={(text) => setRetypedNewPassword(text)}
       secureTextEntry={true}/>
       
      <SaveButton onPress={onChangePassword} />
    </View>
  );}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: 15,
    alignItems: "center",
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
    marginBottom: 20,
  },
});
export default ChangePasswordScreen;
