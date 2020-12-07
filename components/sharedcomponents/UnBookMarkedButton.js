import { Feather } from '@expo/vector-icons'; 
import React from "react";
import { TouchableOpacity } from "react-native";

const UnBookMarkedButton = (props) => {
  return (
    <TouchableOpacity style={{ marginRight: 25 }} onPress={props.onPress}>
     <Feather name="bookmark" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default UnBookMarkedButton;
