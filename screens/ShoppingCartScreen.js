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
import ShoppingCartItem from "../components/sharedcomponents/ShoppingCartItem";

const ShoppingCartScreen = ({ route, navigation }) => {
  const [priceAndQuantity, setPriceAndQuantity] = useState(
    data.map((item) => {
      return { ...item, quantity: 1 };
    })
  );
  let fakeData = priceAndQuantity;
  const onHandleQuantityChange = (title,quantity) => {
  setQuantity(fakeData.map(item=>{
      if(item.title===title){
        return {
          ...item,
          quantity:quantity
        }
      }else{
        return {
          ...item
        }
      }
    }));
  };
  return (
    <View style={style.container}>
      {console.log(priceAndQuantity)}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ShoppingCartItem
            source={item.image}
            title={item.title}
            price={item.price}
            onQuantityChange={onHandleQuantityChange}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={style.paymenInformation}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
});
export default ShoppingCartScreen;
