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
  Alert,
} from "react-native";
import ProductWithQuantityItem from "../components/sharedcomponents/ProductWithQuantityItem";
import data from "../fakedata/homebookflatitem";
import HomeScreenCategoryItem from "../components/homescreen/HomeScreenBookFlatListItem";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";

const BookMarkScreen = ({ route, navigation }) => {
  const [sampleProduct, setSampleProduct] = useState([]);
  return (
    <View>
      <FlatList
                horizontal={true}
                data={sampleProduct}
                renderItem={({ item }) => (
                  <HomeScreenBookFlatListItem
                    source={item.productImage[0]}
                    title={item.productName}
                    price={item.price}
                    onPress={() => navigation.navigate("ProductDetailScreen",{
                      source:item.productImage[0],
                      title:item.productName,
                      description:item.description,
                      price:item.price,
                      id: item.id,
                      remainingQuantity:item.quantity,
                      productDetails: item.productDetails,
                      userId: item.userId,
                      typeId: item.typeId,
                      categoriesId: item.categoriesId.map(item => item.categoryName)
                    })}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
    </View>
  );
};

export default BookMarkScreen;
