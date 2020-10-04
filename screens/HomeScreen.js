import * as React from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";
import DrawerButton from '../components/DrawerButton';
import ShoppingCartButton from '../components/ShoppingCartButton';
import NavigateToSearchPageButton from '../components/NavigateToSearchPageButton';

const HomeScreen = ({ route, navigation }) => {

  return (
    <ImageBackground source={{
      uri:
        "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
    }}
    style={styles.ImageBackground}>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: "100%",
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
