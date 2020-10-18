import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import BookmarkButton from "../components/sharedcomponents/BookmarkButton";
import AddToCartButton from "../components/sharedcomponents/AddToCartButton";

const fetchFonts = () => {
  return Font.loadAsync({
    "ShadowsIntoLight-Regular": require("../assets/fonts/ShadowsIntoLight-Regular.ttf"),
    "IndieFlower-Regular": require("../assets/fonts/IndieFlower-Regular.ttf"),
    "DancingScript-VariableFont_wght": require("../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    "ArchitectsDaughter-Regular": require("../assets/fonts/ArchitectsDaughter-Regular.ttf"),
  });
};

const ProductDetailScreen = ({ route, navigation }) => {
  const { source, title, summary, price } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
        }}
        style={styles.ImageBackground}
      >
        <Image
          source={{
            uri: source,
          }}
          style={styles.Image}
        />

        <View style={styles.subcontainer}>
          <ScrollView style={styles.ScrollView}>
            <Text style={styles.TextTitle}>{title}</Text>
            <View style={styles.bookmarkPriceContainer}>
              <Text style={styles.TextPrice}>{price}</Text>
              <BookmarkButton />
            </View>
            <Text style={styles.TextDescriptionTitle}>Description:</Text>
            <Text style={styles.TextDescription}>{summary}</Text>
            <AddToCartButton />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: "100%",
  },
  container: {
    height: "100%",
  },
  subcontainer: {
    backgroundColor: "white",
    borderTopWidth: 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    height: "100%",
    width: "100%",
    flex: 1,
  },
  TextTitle: {
    marginTop: 50,
    marginLeft: 25,
    color: "black",
    fontSize: 30,
    fontFamily: "ArchitectsDaughter-Regular",
  },
  TextPrice: {
    color: "black",
    marginLeft: 25,
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  bookmarkPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextDescriptionTitle: {
    marginTop: 10,
    marginLeft: 25,
    color: "black",
    fontSize: 30,
    fontFamily: "ShadowsIntoLight-Regular",
  },
  Image: {
    marginTop:20,
    height: 300,
    marginHorizontal: 120,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    backgroundColor: "#E8E8E8",
  },
  TextDescription: {
    marginHorizontal: 15,
  },
  ScrollView:{
    height: "100%",
  }
});
export default ProductDetailScreen;
