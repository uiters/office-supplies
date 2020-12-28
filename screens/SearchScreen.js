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
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import SearchButton from "../components/sharedcomponents/SearchButton";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList } from "react-native-gesture-handler";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";

const SearchScreen = ({ route, navigation }) => {
  const { products, keyWord } = route.params;
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [text, setText] = useState(keyWord);
  const [isRenderFooterVisible, setIsRenderFooterVisible] = useState(
    products.length >= 10 ? true : false
  );
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

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
  const getData = async () => {
    const index = pageIndex + 1;
    setLoading(true);
    try {
      const response = await fetch(
        baseURL + "/product/?page=" + index + "&keyword=" + text,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const json = await response.json();
        if (pageIndex === 1) {
          setFilteredProducts(json.result);
        } else {
          const arr = [...filteredProducts, json.result];
          setFilteredProducts(arr);
        }
        setPageIndex(pageIndex + 1);
        setLoading(false);
      }
    } catch (err) {
      Alert.alert(err.status + "");
    }
  };
  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}
        >
          <Text style={styles.btnText}>Load More</Text>
        </TouchableOpacity>
      </View>
    );
  };
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#E0E0E0"
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.TextInput}
            value={text}
            onChangeText={(text) => {
              onChangeText(text);
              setPageIndex(1);
            }}
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
          ListFooterComponent={isRenderFooterVisible ? renderFooter : null}
        />
      </View>
    );
  }
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
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: "#800000",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
});

export default SearchScreen;
