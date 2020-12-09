import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import InvoiceDetailRow from "../components/sharedcomponents/InvoiceDetailRow";

const InvoiceDetailScreen = ({ route, navigation }) => {
  const {invoiceDetails} = route.params;
    return (
      <View style={style.container}>
        <FlatList
          style={style.flatlist}
          data={invoiceDetails}
          renderItem={({ item }) => (
            <InvoiceDetailRow
              id={item._id}
              price={item.price}
              quantity={item.quantity}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={style.paymenInformation}>
          <Text style={style.titlePrice}>Price:</Text>
          <Text style={style.price}>{totalPrice} VND</Text>
        </View>
      </View>
    );
};

const style = StyleSheet.create({
  ScrollView: {
    height: "50%",
  },
  filterContainer: {
    marginTop: 20,
    height: 50,
    width: 300,
    marginLeft: 50,
  },
  deliveryContainer: {
    display: "flex",
  },
  filterTitle: {
    paddingTop: 5,
    fontSize: 18,
    marginRight: 10,
    width: "35%",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 10,
  },
  flatlist: {
    height: "40%",
  },
  paymenInformation: {
    flexDirection: "row",
    justifyContent: "space-around",
    fontFamily: ":arial",
    fontSize: 30,
  },
  titlePrice: {
    fontFamily: "SansitaSwashed-MediumItalic",
    fontSize: 25,
  },
  deliveryText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    height: "100%",
    fontWeight: "bold",
    fontSize: 25,
  },
  TextInput: {
    marginLeft: 50,
    height: 50,
    paddingLeft: 15,
    width: 300,
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
});
export default InvoiceDetailScreen;
