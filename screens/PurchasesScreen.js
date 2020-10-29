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

const PurchasesScreen = ({ route, navigation }) => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <ProductWithQuantityItem
            source={item.image}
            title={item.title}
            price={item.price}
            quantity={5}
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

export default PurchasesScreen;
