import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

const fetchFonts = () => {
  return Font.loadAsync({
    "ShadowsIntoLight-Regular": require("../../assets/fonts/ShadowsIntoLight-Regular.ttf"),
    "IndieFlower-Regular": require("../../assets/fonts/IndieFlower-Regular.ttf"),
    "DancingScript-VariableFont_wght": require("../../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    "ArchitectsDaughter-Regular": require("../../assets/fonts/ArchitectsDaughter-Regular.ttf"),
  });
};

const ProductWithQuantityItem = (props) => {
  const onAddQuantity = () => {};
  const onMinusQuantity = () => {};
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <TouchableOpacity style={styles.TouchableOpacity} onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: props.source,
          }}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{props.title}</Text>
        <View style={styles.quantity}>
          <Text style={styles.itemQuantity}>{props.quantity}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TouchableOpacity: {
    width: 170,
    height: 300,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: "#E8E8E8",
  },
  itemImage: {
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  itemTitle: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "DancingScript-VariableFont_wght",
  },
  itemQuantity: {
    marginHorizontal:50,
    fontSize: 20,
    paddingHorizontal:15,
    fontFamily: "DancingScript-VariableFont_wght",
  },
  quantity: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    height:100
  },
});
export default ProductWithQuantityItem;
