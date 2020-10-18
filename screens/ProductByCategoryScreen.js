import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  Picker
} from "react-native";

const ProductByCategoryScreen = ({ route, navigation }) => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
  <View>
   <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
  </View>);
};

export default ProductByCategoryScreen;
