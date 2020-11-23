import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { TouchableOpacity } from "react-native";

const SearchButton = props => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 10, marginTop:10 }}
      onPress={props.onPress}
    >
      <AntDesign name="search1" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default SearchButton;