import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

const DeleteShoppingCartItemButton = (props) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 10, marginTop: 20 }}
      onPress={props.onPress}
    >
      <AntDesign name="delete" size={45} color="black" />
    </TouchableOpacity>
  );
};

export default DeleteShoppingCartItemButton;
