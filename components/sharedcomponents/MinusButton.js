import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

const MinusButton = (props) => {
  return (
    <TouchableOpacity style={{ width: 30 }} onPress={props.onPress}>
      <AntDesign name="minuscircleo" size={25} color="black" />
    </TouchableOpacity>
  );
};

export default MinusButton;
