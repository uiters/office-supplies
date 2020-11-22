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
import ConfirmBuyItemButton from "../components/sharedcomponents/ConfirmBuyItemButton";

const ShoppingCartScreen = ({ route, navigation }) => {
  let DATA = useSelector(state => state.cart.shoppingCart);
  let totalPrice = useSelector(state => state.cart.total).toFixed(2);
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
      style={style.flatlist}
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
      <View style={style.paymenInformation}>
        <Text style={style.titlePrice}>Total Price:</Text>
        <Text style={style.price}>{totalPrice}</Text>
      </View>
      <ConfirmBuyItemButton />
    </View>
  );
};}

const style = StyleSheet.create({
  container: {
    marginTop:10
  },
  flatlist:{
    height:"50%"
  },
  paymenInformation:{
    flexDirection:"row",
    justifyContent:"space-around",
    fontFamily:":arial",
    fontSize:30
  },
  titlePrice:{
    fontFamily:"SansitaSwashed-MediumItalic",
    fontSize:25
  },
  price:{
    height:"100%",
    fontWeight:"bold",
    fontSize:25
  },
});
export default ShoppingCartScreen;
