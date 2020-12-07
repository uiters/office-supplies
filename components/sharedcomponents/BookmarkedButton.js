import { FontAwesome } from '@expo/vector-icons'; 
import React from "react";
import { TouchableOpacity } from "react-native";

const BookmarkedButton = (props) => {
  return (
    <TouchableOpacity style={{ marginRight: 25 }} onPress={props.onPress}>
      <FontAwesome name="bookmark" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default BookmarkedButton;
