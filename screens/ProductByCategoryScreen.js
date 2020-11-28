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

const ProductByCategoryScreen = ({ route, navigation }) => {
  const { categories } = route.params;
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("");
  const [filters, setFilters] = useState([]);
  const onSubmitEditing = () => {
    console.log(text);
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
    setFilters(arr);
  };
  useEffect(() => {
    addFilters();
  }, [categories]);

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
          onChangeItem={(item) => setSelectedValue(item.value)}
        />
        <SearchButton />
      </View>
      <FlatList style={styles.flatList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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

export default ProductByCategoryScreen;
