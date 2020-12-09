import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const InvoiceDetailRow = (props) => {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.information}>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Product Name:</Text>
            <Text style={{ ...styles.itemTitle, color: "black" }}>abc</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Quantity:</Text>
            <Text
              style={{
                ...styles.itemTitle,
                fontStyle: "normal",
                color: "#BEBEBE",
              }}
            >
              {props.quantity}
            </Text>
            </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Price:</Text>
            <Text style={{ ...styles.itemTitle, color: "red" }}>{props.price}</Text>
          </View>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Status:</Text>
            <Text style={{ ...styles.itemTitle, color: "red" }}>stt1</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Supplier:</Text>
            <Text style={{ ...styles.itemTitle, color: "red" }}>Supplier1</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    height: 100,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
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
    marginLeft: 5,
    elevation: 17,
  },
  rightContainer: {
    flexDirection: "column",

    justifyContent: "center",
    marginLeft: 30,
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
    marginLeft: 5,
  },
  itemAddress: {},
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

export default InvoiceDetailRow;
