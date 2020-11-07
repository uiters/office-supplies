import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NavigateToChangePasswordScreen = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Change Password</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:200,
    marginHorizontal:100,
    marginTop: 20,
    paddingLeft:20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90EE90",
    height: 50,
    borderWidth: 0,
    borderRadius: 30,
    marginBottom: 20,
  },
  text: {
    width: 150,
    fontSize: 15,
    marginLeft: 10,
    color: "white",
  },
});

export default NavigateToChangePasswordScreen;
