import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {TouchableOpacity} from "react-native";

const MinusButton = (props) => {
  return (
    <TouchableOpacity style={{ width: 30, marginLeft:5 }} onPress={props.onPress}>
      <AntDesign name="minussquare" size={28} color="black" />
    </TouchableOpacity>
  );
};

export default MinusButton;
