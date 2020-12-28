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
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import baseURL from "../api/BaseURL";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";

const ProductByCategoryScreen = ({ route, navigation }) => {
  const [fullProducts, setFullProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id, categories } = route.params;
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("");
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);
  const [selectedValueId, setSelectedValueId] = useState("");
  const [isRenderFooterVisible, setIsRenderFooterVisible] = useState(true)

  const addProductByType = async (fullIndex) => {
    try {
      setLoading(true);
      const response = await fetch(
        baseURL + "/product/?page=" + fullIndex + "&typeId=" + id,
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
        if(json.result.length>=10){
          setIsRenderFooterVisible(true);
        }else{
          setIsRenderFooterVisible(false);
        }
        setLoading(false);
      }
    } catch (err) {
      Alert.alert(err.status + "");
    }
  };
  const addProductByCategory = async (filteredIndex, value) => {
    try {
      setLoading(true);
      console.log(selectedValue);
      const response = await fetch(
        baseURL + "/product/?page=" + filteredIndex + "&categoryId=" + value,
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
        if(json.result.length>=10){
          setIsRenderFooterVisible(true);
        }else{
          setIsRenderFooterVisible(false);
        }
        setLoading(false);
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
    addProductByType(1);
  }, []);

  const onChangeCategory = async (value) => {
    setText(null);
    if (value == "all") {
      await addProductByType(1);
      await setPageIndex(1);
    } else {
      await addProductByCategory(1, value);
      await setPageIndex(1);
    }
  };
  const addProductByKeyWord = async (index,keyWord) => {
    try {
      setLoading(true);
      const response = await fetch(
        baseURL +
          "/product/?page=" +
          index +
          "&keyword=" +
          keyWord +
          "&typeId=" +
          id,
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
        if(json.result.length>=10){
          setIsRenderFooterVisible(true);
        }else{
          setIsRenderFooterVisible(false);
        }
        setLoading(false);
      }
    } catch (err) {
      Alert.alert(err.status + "");
    }
  };
  const onSubmitEditing = () => {
    setSelectedValue(-1);
    setSelectedValueId(-1);
    if (text === "") {
      addProductByType(1);
      setPageIndex(1);
    } else {
      addProductByKeyWord(1, text);
      setPageIndex(1);
    }
  };
  const addExtraProductByType = async (fullIndex) => {
    try {
      setLoading(true);
      const response = await fetch(
        baseURL + "/product/?page=" + fullIndex + "&typeId=" + id,
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
        console.log(json.result);
        const arr = [...filteredProducts, ...json.result];
        setFilteredProducts(arr);
        if(json.result.length>=10){
          setIsRenderFooterVisible(true);
        }else{
          setIsRenderFooterVisible(false);
        }
        setLoading(false);
      }
    } catch (err) {
      Alert.alert(err.status + "");
    }
  };
  const addExtraProductByCategory = async (filteredIndex, value) => {
    try {
      setLoading(true);
      console.log(selectedValue);
      const response = await fetch(
        baseURL + "/product/?page=" + filteredIndex + "&categoryId=" + value,
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
        const arr = [...filteredProducts, ...json.result];
        console.log(arr);
        setFilteredProducts(arr);
        if(json.result.length>=10){
          setIsRenderFooterVisible(true);
        }else{
          setIsRenderFooterVisible(false);
        }
        setLoading(false);
      }
    } catch (err) {
      Alert.alert("ProdCate" + err.status + "");
    }
  };
  const addExtraProductByKeyWord = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(
        baseURL +
          "/product/?page=" +
          page +
          "&keyword=" +
          text +
          "&typeId=" +
          id,
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
        const arr=[...filteredProducts,...json.result];
        setFilteredProducts(arr);
        if(json.result.length>=10){
          setIsRenderFooterVisible(true);
        }else{
          setIsRenderFooterVisible(false);
        }
        setLoading(false);
      }
    } catch (err) {
      Alert.alert(err.status + "");
    }
  }
   const getData = async () => {
    if(selectedValue===-1){
        await addExtraProductByKeyWord(pageIndex+1);
        setPageIndex(pageIndex+1);
    }else{
      if (selectedValueId == "all" || selectedValueId == "") {
        await addExtraProductByType(pageIndex + 1);
      } else {
        await addExtraProductByCategory(pageIndex + 1, setSelectedValueId);
      }
    }
    await setPageIndex(pageIndex + 1);
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
            onChangeItem={(item) => {
              onChangeCategory(item.value);
              setSelectedValueId(item.value);
            }}
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
          ListFooterComponent={isRenderFooterVisible?renderFooter:null}
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

export default ProductByCategoryScreen;
