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
import DropDownPicker from "react-native-dropdown-picker";


const ConfirmBuyingScreen = ({ route, navigation }) => {
  let DATA = useSelector((state) => state.cart.shoppingCart);
  let totalPrice = useSelector((state) => state.cart.total).toFixed(2);

  const [selectedCityProvince, setSelectedCityProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [addressNumberStreet, setAddressNumberStreet] = useState("");

  if (DATA.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Your shopping cart is empty. Buy something lah!
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
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
        <View style={styles.addressInformation}>
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>City/Province: </Text>
            <DropDownPicker
              items={[]}
              style={{ height: 80, width: 250 }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => setSelectedCityProvince(item.value)}
            />
          </View>
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>District: </Text>
            <DropDownPicker
              items={[]}
              style={{ height: 80, width: 250, marginLeft:"auto" }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => setSelectedDistrict(item.value)}
            />
          </View>
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Ward: </Text>
            <DropDownPicker
              items={[]}
              style={{ height: 80, width: 250,marginLeft:"auto" }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => setSelectedWard(item.value)}
            />
          </View>
          <View>
            <Text style={styles.filterTitle}>Address Number/Street: </Text>
            <TextInput
              style={styles.TextInput}
              value={addressNumberStreet}
              onChangeText={(text) => setAddressNumberStreet(text)}
              placeholder="Address number/street name"
            />
          </View>
        </View>
        <View style={styles.paymenInformation}>
          <Text style={styles.titlePrice}>Total Price:</Text>
          <Text style={styles.price}>{totalPrice}</Text>
        </View>
        <View style={styles.paymenInformation}>
          <Text style={styles.titlePrice}>Shipping Price:</Text>
          <Text style={styles.price}>10 $</Text>
        </View>
        <ConfirmBuyItemButton />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 10,
  },
  flatlist: {
    height: "50%",
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
  price: {
    height: "100%",
    fontWeight: "bold",
    fontSize: 25,
  },
  filterContainer: {
    marginTop: 20,
    flexDirection: "column",
    display:"flex",
    marginLeft: 10,
  },
  filterTitle: {
    paddingTop: 5,
    fontSize: 18,
    marginRight: 10,
    width:"35%"
  },
  TextInput: {
    height: 50,
    paddingLeft: 15,
    width: "80%",
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
export default ConfirmBuyingScreen;
