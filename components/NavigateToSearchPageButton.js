import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NavigateToSearchPageButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.subcontainer}>
        <View style={styles.button}>
          <AntDesign name="search1" size={25} color="black" />
        </View>
        <View style={styles.textview}>
          <Text style={styles.text}>Search for anything</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 60,
    backgroundColor: "#D3D3D3",
    marginTop:50
  },
  button: {
    padding: 15,
  },
  textview: {
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default NavigateToSearchPageButton;
