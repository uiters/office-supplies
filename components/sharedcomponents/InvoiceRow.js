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
  Image,
  Alert,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromShoppingCart,
  updateShoppingCart,
} from "../../redux/actions/index";
import DeleteShoppingCartItemButton from "./DeleteShoppingCartItemButton";

const InvoiceRow = (props) => {
  const [quantity, setQuantity] = useState(props.quantity + "");
  let token = useSelector((state) => state.auth.token);
  let oldQuantity;
  const dispatch = useDispatch();
  const address = props.address.street+", "+props.address.ward+", "+props.address.district+", "+props.address.city;
  const date = props.createdAt.substring(0,10);
  return (
    <TouchableOpacity style = {styles.bigContainer} onPress={props.onPress}>
      <View style={styles.bigContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bfEAZWkrpD_y8GACmMVNcavGGDOF-BjAOQ&usqp=CAU",
            }}
            style={styles.image}
          />
          <View style={styles.information}>
            <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Invoice ID:</Text>
            <Text style={{...styles.itemTitle, color:"black"}}>{props.invoiceId}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityTitle}>Address:</Text>
              <Text style={{...styles.itemTitle, fontStyle:"normal", color:"#BEBEBE"}}>{address}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityTitle}>Status:</Text>
              <Text style={{...styles.itemTitle, color:"red"}}>
                {props.status===1?"Processing":"Delivered"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    height: 100,
    flexDirection: "row",
    marginBottom: 10,
    marginTop:10
  },
  leftContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    marginTop: 5,
    marginLeft:5,
    elevation: 17,
  },
  rightContainer: {
    flexDirection:"column",
    
    justifyContent:"center",
    marginLeft:30
  },
  image: {
    height: "100%",
    width: "20%",
  },
  information: {
    height: "100%",
    width: "60%",
    flexDirection: "column",
    marginLeft: 10,
  },
  itemTitle: {
    fontFamily: "sans-serif",
    
    fontSize: 13,
    fontStyle: "italic",
    textTransform: "capitalize",
    marginLeft:5
  },
  itemAddress:{

  },
  quantityContainer: {
    marginBottom: 5,
    flexDirection: "row",
  },
  quantityTitle: {
    fontFamily: "sans-serif",
    fontSize: 13,
    fontWeight: "bold",
    height: "100%",
  },
  quantityInput: {
    width: 40,
    height: "100%",
    backgroundColor: "white",
    marginLeft: 10,
  },
  price: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default InvoiceRow;