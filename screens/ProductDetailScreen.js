import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { addToShoppingCart } from "../redux/actions/index";
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
  const availableUser = useSelector((state) => state.auth.isAuthenticate);
  const { source, title, summary, price, id } = route.params;

  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();

  const onAddToShoppingCart = () => {
    if (availableUser === false) {
      navigation.navigate("SignInScreen");
    } else {
      dispatch(addToShoppingCart({ id, source, title, price, quantity }));
      navigation.navigate("ShoppingCartScreen");
    }
  };

  const onAddToBookMark = () =>{
    if (availableUser === false) {
      navigation.navigate("SignInScreen");
    }
  }
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
              <BookmarkButton onPress={onAddToBookMark}/>
            </View>
            <Text style={styles.TextDescriptionTitle}>Description:</Text>
            <Text style={styles.TextDescription}>{summary}</Text>
            <Text style={styles.TextDescriptionTitle}>
              Additional Information:
            </Text>
            <Text style={styles.TextDescription}>abc</Text>
            <Text style={styles.TextDescriptionTitle}>Category:</Text>
            <Text style={styles.TextPrice}>abc</Text>
            <View style={styles.QuantityView}>
              <Text style={styles.TextDescriptionTitle}>Quantity:</Text>
              <TextInput
                onChangeText={(text) => {
                  setQuantity(text);
                }}
                value={quantity}
                style={styles.quantityInput}
                keyboardType="numeric"
              />
            </View>
            <AddToCartButton onPress={onAddToShoppingCart} />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  QuantityView: {
    flexDirection: "row",
    width: "100%",
    height: 70,
  },
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
    marginTop: 20,
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
  ScrollView: {
    height: "100%",
  },
  quantityInput: {
    marginTop: 20,
    marginLeft: 10,
    paddingLeft: 5,
    width: 40,
    borderColor: "black",
    borderWidth: 2,
    height: "50%",
    backgroundColor: "white",
  },
});
export default ProductDetailScreen;
