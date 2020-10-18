import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity,StyleSheet,Text } from "react-native";

const SignUpButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.Text}>SIGN UP</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{
        height:60,
        width:200,
        backgroundColor:"#00FFFF",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:20,
        marginLeft:80,
        marginTop:20
    },
    Text:{
        fontSize:20,
        fontWeight:"bold"
    }
});

export default SignUpButton;