import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

const BackButton = props => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={props.onPress}
    >
      <Ionicons name="ios-arrow-back" size={40} color="white" />
    </TouchableOpacity>
  );
};

export default BackButton;
