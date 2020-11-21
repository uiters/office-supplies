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
import ShoppingCartItem from "../components/sharedcomponents/ShoppingCartItem";
import { useSelector, useDispatch } from "react-redux";

const ShoppingCartScreen = ({ route, navigation }) => {
  let DATA = useSelector(state => state.cart.shoppingCart);

  if(DATA===[]){
    return(
    <View style={style.container}>
      <Text>Shopping Cart Has Nothing To Show</Text>
    </View>
    );
  }else{
  return (
    <View style={style.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ShoppingCartItem
            id={item.id}
            source={item.source}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={style.paymenInformation}></View>
    </View>
  );
};}

const style = StyleSheet.create({
  container: {
    marginTop:10
  },
});
export default ShoppingCartScreen;
