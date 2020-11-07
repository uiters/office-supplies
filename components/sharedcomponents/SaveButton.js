import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SaveButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <AntDesign name="save" size={30} color="black" />
        <Text style={styles.text}>Save</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:200,
    marginHorizontal:100,
    marginTop: 20,
    paddingLeft:60,
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
    fontSize: 20,
    marginLeft: 10,
    color: "white",
  },
});

export default SaveButton;
