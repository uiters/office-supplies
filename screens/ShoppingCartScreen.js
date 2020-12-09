import React, { useEffect, useState } from "react";
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
import { removeEverything } from "../redux/actions/index";
import baseURL from "../api/BaseURL";

const ShoppingCartScreen = ({ route, navigation }) => {
  let DATA = useSelector((state) => state.cart.shoppingCart);
  const [cityList, setCityList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [selectedCityProvince, setSelectedCityProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [addressNumberStreet, setAddressNumberStreet] = useState("");
  const token = useSelector((state) => state.auth.token);
  let totalPrice = useSelector((state) => state.cart.total);
  const onAddCityProvinceData = async () => {
    try {
      const response = await fetch("https://thongtindoanhnghiep.co/api/city", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        const cityList = json.LtsItem;
        let arr = [];
        for (let i of cityList) {
          let item = {
            label: i.Title,
            value: i.ID,
          };
          arr.push(item);
        }
        setCityList(arr);
      }
    } catch (err) {
      Alert.alert(err);
    }
  };
  useEffect(() => {
    onAddCityProvinceData();
  }, []);
  const onAddDistrictData = async (cityId) => {
    try {
      const response = await fetch(
        "https://thongtindoanhnghiep.co/api/city/" + cityId + "/district",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const json = await response.json();
        let arr = [];
        for (let i of json) {
          let item = {
            label: i.Title,
            value: i.ID,
          };
          arr.push(item);
        }
        setDistrictList(arr);
      }
    } catch (err) {
      Alert.alert(err.status);
    }
  };
  const onAddWardData = async (districtId) => {
    try {
      const response = await fetch(
        "https://thongtindoanhnghiep.co/api/district/" + districtId + "/ward",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        let arr = [];
        for (let i of json) {
          let item = {
            label: i.Title,
            value: i.ID,
          };
          arr.push(item);
        }
        setWardList(arr);
      }
    } catch (err) {
      Alert.alert(err.status);
    }
  };
  const onChangeCity = async (item) => {
    await setSelectedCityProvince(item.label);
    await setSelectedDistrict("");
    await onAddDistrictData(item.value);
  };
  const onChangeDistrict = async (item) => {
    await setSelectedDistrict(item.label);
    await setSelectedWard("");
    await onAddWardData(item.value);
  };
  const dispatch = useDispatch();

  const onBuyingItem = async () => {
    if(selectedCityProvince===""||selectedDistrict===""||selectedWard===""||addressNumberStreet===""){
      Alert.alert("Delivery information has not been fully input!");
      return;
    }
    try {
      const response = await fetch(baseURL + "/invoice-detail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          total: totalPrice + "",
          address: {
            city: selectedCityProvince,
            district: selectedDistrict,
            ward: selectedWard,
            street: addressNumberStreet,
          },
          cart: DATA.map((item) => {
            return {
              /*productName:item.title,
              email:item.email,*/
              productId: item.id,
              quantity: item.quantity,
              total: item.quantity * item.price,
            };
          }),
        }),
      });
      if (response.status === 201) {
        const json = await response.json();
        navigation.navigate("ThankYouScreen", {
          invoiceId: json[0].invoiceId
        });
        dispatch(removeEverything());
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (DATA.length === 0) {
    return (
      <View style={style.emptyContainer}>
        <Text>
          Your shopping cart is empty. Buy something lah!
        </Text>
      </View>
    );
  } else {
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
          <Text style={style.titlePrice}>Price:</Text>
          <Text style={style.price}>{totalPrice} VND</Text>
        </View>

        <Text style={style.deliveryText}> Delivery Information: </Text>
        <View style={style.deliveryContainer}>
          <ScrollView style={style.ScrollView}>
            <DropDownPicker
              items={cityList}
              containerStyle={style.filterContainer}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => onChangeCity(item)}
              placeholder="Select City/Province"
            />
            <DropDownPicker
              items={districtList}
              containerStyle={style.filterContainer}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => onChangeDistrict(item)}
              placeholder="Select District"
            />
            <DropDownPicker
              items={wardList}
              containerStyle={style.filterContainer}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => setSelectedWard(item.label)}
              placeholder="Select Ward"
            />
            <TextInput
              style={style.TextInput}
              value={addressNumberStreet}
              onChangeText={(text) => setAddressNumberStreet(text)}
              placeholder="Address number/street name"
            />
            <ConfirmBuyItemButton onPress={onBuyingItem} />
          </ScrollView>
        </View>
      </View>
    );
  }
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
export default ShoppingCartScreen;
