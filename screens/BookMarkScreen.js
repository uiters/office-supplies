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
  return (
    <View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <HomeScreenBookFlatListItem
            source={item.image}
            title={item.title}
            price={item.price}
            onPress={() =>
              navigation.navigate('ProductDetailScreen',{
                source: item.image,
                title: item.title,
                summary: item.summary,
                price: item.price})
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BookMarkScreen;
