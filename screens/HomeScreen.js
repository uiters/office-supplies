import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import DrawerButton from "../components/DrawerButton";
import ShoppingCartButton from "../components/ShoppingCartButton";
import NavigateToSearchPageButton from "../components/NavigateToSearchPageButton";

const HomeScreen = ({ route, navigation }) => {
  const [text, setText] = useState("");

  const onSubmitEditing = () => {
    console.log(text);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
        }}
        style={styles.ImageBackground}
      >
        <TextInput
          style={styles.TextInput}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder="What are you looking for?"
          onSubmitEditing={onSubmitEditing}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    height: 50,
    width: "100%",
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    paddingLeft: 10,
    width: "85%",
    borderColor: "gray",
    marginTop: 25,
    borderWidth: 0.2,
    backgroundColor: "white",
    color: "black",
    textShadowColor: 0.5,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

export default HomeScreen;
