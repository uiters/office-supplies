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
  TouchableOpacity,
  Image
} from "react-native";

const HomeScreenBookFlatListItem = (props) => {
  return (
    <TouchableOpacity style={styles.TouchableOpacity}>
      <View style={styles.container}>
        <Image source={{
            uri:props.source
        }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemPrice}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    TouchableOpacity:{
        width:200,
        height:300,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        marginTop:20
    },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:20,
    shadowColor: "#989898",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
    backgroundColor:"#d3d3d3"
  },
  itemImage: {
    height: "70%",
    width: "70%",
  },
  itemTitle: {
    fontSize: 17,
  },
  itemPrice: {
    color: "red",
    fontStyle: "italic",
  },
});

export default HomeScreenBookFlatListItem;
