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
  Alert,
} from "react-native";
import SearchButton from "../components/sharedcomponents/SearchButton";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList } from "react-native-gesture-handler";
import baseURL from "../api/BaseURL";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductByCategoryScreen = ({ route, navigation }) => {
  const [fullProducts, setFullProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id, categories } = route.params;
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("");
  const [filters, setFilters] = useState([]);
  const addProductByType = async () => {
    try {
      const response = await fetch(baseURL + "/product/?page=1&typeId=" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        prods = json.result;
        setFullProducts(json.result);
        setFilteredProducts(json.result);
      }
    } catch (err) {
      Alert.alert(err.status + "");
    }
  };
  const addProductByCategory = async (value) => {
    try {
      console.log(selectedValue);
      const response = await fetch(
        baseURL + "/product/?page=1&categoryId=" + value,
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
        setFilteredProducts(json.result);
      }
    } catch (err) {
      Alert.alert("ProdCate" + err.status + "");
    }
  };
  const addFilters = () => {
    let arr = [];
    for (let category of categories) {
      let item = {
        label: category.categoryName,
        value: category._id,
      };
      arr.push(item);
    }
    arr.push({ label: "All", value: "all" });
    setFilters(arr);
  };
  useEffect(() => {
    addFilters();
    addProductByType();
  }, [categories]);

  const onChangeCategory = async (value) => {
    setSelectedValue(value);
    if (value == "all") {
      setFilteredProducts(fullProducts);
    } else {
      await addProductByCategory(value);
    }
  };

  const onSubmitEditing = () => {
    if (text === "") {
      setFilteredProducts(fullProducts);
    } else {
      const foundItems = fullProducts.filter((item) =>
        item.productName.includes(text)
      );
      setFilteredProducts(foundItems);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.TextInput}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder="What are you looking for?"
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filter: </Text>
        <DropDownPicker
          items={filters}
          style={{ height: 80, width: 250 }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          onChangeItem={(item) => onChangeCategory(item.value)}
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
    marginTop: 10,
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 5,
    marginLeft: 40,
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

export default ProductByCategoryScreen;
