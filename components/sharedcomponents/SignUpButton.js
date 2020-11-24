import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SignUpButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Sign up</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:300,
    marginHorizontal:40,
    marginTop: 20,
    paddingLeft:70,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#90EE90",
    height: 50,
    borderWidth: 0,
    borderRadius: 30,
    marginBottom: 20,
  },
  text: {
    width: 150,
    fontSize: 18,
    marginLeft: 10,
    color: "white",
  },
});

export default SignUpButton;
