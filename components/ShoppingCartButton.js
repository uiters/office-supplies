import * as React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ShoppingCartButton = (props) => {
  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
    >
      <AntDesign name="shoppingcart" size={40} color="white" />
    </TouchableOpacity>
  );
};

export default ShoppingCartButton;
