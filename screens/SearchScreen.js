import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  Picker,
  TextInput,
} from "react-native";
import SearchButton from "../components/sharedcomponents/SearchButton";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList } from "react-native-gesture-handler";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";

const SearchScreen = ({ route, navigation }) => {
  const { products } = route.params;
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [text, setText] = useState("");
  const onSubmitEditing = () => {
    console.log(text);
  };
  const onChangeText = (text) => {
    setText(text);
    if (text === "") {
      setFilteredProducts(products);
    } else {
      const prods = filteredProducts.filter((item) =>
        item.productName.includes(text)
      );
      setFilteredProducts(prods);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.TextInput}
          value={text}
          onChangeText={(text) => onChangeText(text)}
          placeholder="What are you looking for?"
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={filteredProducts}
        renderItem={({ item }) => (
          <HomeScreenBookFlatListItem
            source={item.productImage[0]}
            title={item.productName}
            price={item.price}
            onPress={() =>
              navigation.navigate("ProductDetailScreen", {
                source: item.productImage[0],
                title: item.productName,
                description: item.description,
                price: item.price,
                id: item.id,
                remainingQuantity: item.quantity,
                productDetails: item.productDetails,
                userId: item.userId,
                typeId: item.typeId,
                categoriesId: item.categoriesId.map(
                  (item) => item.categoryName
                ),
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 10,
  },
  filterTitle: {
    paddingTop: 5,
    fontSize: 18,
    marginRight: 10,
  },
  TextInput: {
    height: 50,
    paddingLeft: 15,
    width: "80%",
    borderColor: "gray",
    marginTop: 15,
    backgroundColor: "white",
    color: "black",
    textShadowColor: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    marginTop: 30,
  },
});

export default SearchScreen;
