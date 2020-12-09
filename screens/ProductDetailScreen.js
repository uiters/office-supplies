import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import * as Font from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { addToShoppingCart } from "../redux/actions/index";
import AddToCartButton from "../components/sharedcomponents/AddToCartButton";
import ProductDetailsRow from "../components/sharedcomponents/ProductDetailsRow";

const fetchFonts = () => {
  return Font.loadAsync({
    "ShadowsIntoLight-Regular": require("../assets/fonts/ShadowsIntoLight-Regular.ttf"),
    "IndieFlower-Regular": require("../assets/fonts/IndieFlower-Regular.ttf"),
    "DancingScript-VariableFont_wght": require("../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    "ArchitectsDaughter-Regular": require("../assets/fonts/ArchitectsDaughter-Regular.ttf"),
  });
};

const ProductDetailScreen = ({ navigation, route }) => {
  const availableUser = useSelector((state) => state.auth.isAuthenticate);
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);
  const [array, setArray] = useState([]);
  const {
    source,
    title,
    description,
    price,
    id,
    remainingQuantity,
    userId,
    typeId,
    categoriesId,
    productDetails,
  } = route.params;

  const dispatch = useDispatch();

  const arr = () => {
    let arrr = [];
    let s = 1;
    for (const key in productDetails) {
      arrr.push({ id: s, key, value: productDetails[key] });
      s++;
    }
    setArray(arrr);
  };

  useEffect(() => {
    arr();
  }, []);

  const onAddToShoppingCart = () => {
    if (availableUser === false) {
      navigation.navigate("SignInScreen");
    } else {
      if (remainingQuantity <= 0) {
        Alert.alert("Item sold out already!");
      } else {
        const foundItem = shoppingCart.find((item) => item.id === id);
        if (!foundItem || foundItem.quantity + 1 <= remainingQuantity) {
          dispatch(
            addToShoppingCart({
              id,
              source,
              title,
              price,
              quantity: 1,
              remainingQuantity,
              //email:userId.email,
            })
          );
          navigation.navigate("ShoppingCartScreen");
        } else {
          Alert.alert("Remaining quantity exceeded!");
        }
      }
    }
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
        <Image
          source={{
            uri: source,
          }}
          style={styles.Image}
        />
        <View style={styles.subcontainer}>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Product Name:</Text>
              <Text style={styles.subContainerInfoProp}>{title}</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Product Type(s):</Text>
              <Text style={styles.subContainerInfoProp}>{typeId.typeName}</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Categorie(s):</Text>
              <Text style={styles.subContainerInfoProp}>{categoriesId}</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Description:</Text>
              <Text style={styles.subContainerInfoProp}>{description}</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Price:</Text>
              <Text style={styles.subContainerInfoProp}>{price}</Text>
              <Text style={styles.subContainerInfoProp}>VND</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>
                Remaining Quantit(ies):
              </Text>
              <Text style={styles.subContainerInfoProp}>
                {remainingQuantity > 0 ? remainingQuantity : "Sold Out"}
              </Text>
            </View>
            <View style={styles.subContainerInfoVertical}>
              <Text style={styles.subContainerInfoTitle}>Product Details:</Text>
              <View>
                {array &&
                  array.map((item) => (
                    <ProductDetailsRow
                      key={item.id}
                      keyy={item.key}
                      value={item.value}
                    />
                  ))}
              </View>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Sold By:</Text>
              <Text style={styles.subContainerInfoEmail}>{userId.email}</Text>
            </View>
            <AddToCartButton onPress={onAddToShoppingCart} />
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
  subContainerInfo: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 30,
  },
  subContainerInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    marginRight: 10,
  },
  subContainerInfoProp: {
    fontSize: 18,
    marginRight: 5,
    textTransform: "capitalize",
  },
  subContainerInfoEmail: {
    fontSize: 18,
    marginRight: 5,
  },
  subContainerInfoVertical: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: "column",
  },
});
export default ProductDetailScreen;
