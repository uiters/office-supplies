import React, { useState } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import ShoppingCartButton from "../homeheader/ShoppingCartButton";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import BackButton from "../sharedcomponents/BackButton";

const fetchFonts = () => {
  return Font.loadAsync({
    "SansitaSwashed-BlackItalic": require("../../assets/fonts/SansitaSwashed-BlackItalic.ttf"),
    "SansitaSwashed-MediumItalic": require("../../assets/fonts/SansitaSwashed-MediumItalic.ttf"),
  });
};

const ProductDetailHeader = ({ navigation }) => {
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
    <ImageBackground
      source={{
        uri:
          "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
      }}
      style={styles.ImageBackground}
    >
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <BackButton onPress={()=>navigation.goBack()}/>
          <Text style={styles.TextTitle}>Product Details</Text>
          <ShoppingCartButton />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: 130,
  },
  container: {
    height: "100%",
    paddingTop: 50,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextTitle: {
    color: "white",
    fontSize: 30,
    fontFamily: "SansitaSwashed-BlackItalic",
  },
});
export default ProductDetailHeader;