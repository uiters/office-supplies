import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

const BookmarkButton = (props) => {
  return (
    <TouchableOpacity style={{ marginRight: 25 }} onPress={props.onPress}>
      <FontAwesome5 name="bookmark" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BookmarkButton;
