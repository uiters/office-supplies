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

const ShoppingCartItem = (props) => {
  const [quantity, setQuantity] = useState("1");
  return (
    <View style={styles.container}>
      {props.onQuantityChange(props.title,quantity)}
      <Image source={{ uri: props.source }} style={styles.image} />
      <View style={styles.information}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityTitle}>Quantity:</Text>
          <TextInput
            onChangeText={(text) => {
              setQuantity(text)
              props.onQuantityChange(props.title,quantity)
            }}
            value={quantity}
            style={styles.quantityInput}
          />
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.price}>Price:</Text>
          <Text style={{...styles.price,marginLeft:20}}>{props.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    marginTop: 10,
    marginLeft: 20,
    elevation: 17,
  },
  image: {
    height: "100%",
    width: "20%",
  },
  information: {
    height: "100%",
    width: "60%",
    flexDirection: "column",
    marginLeft: 10,
  },
  itemTitle: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 15,
    fontStyle: "italic",
  },
  quantityContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  quantityTitle: {
    fontFamily: "sans-serif",
    fontSize: 15,
    fontWeight:"bold",
    height: "100%",
  },
  quantityInput: {
    marginLeft: 10,
    paddingLeft: 5,
    width: 40,
    borderColor: "black",
    borderWidth: 2,
    height: "100%",
    backgroundColor: "white",
  },
  price: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default ShoppingCartItem;
