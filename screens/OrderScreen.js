import React, { useState,useEffect } from "react";
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
  ActivityIndicator
} from "react-native";
import InvoiceRow from "../components/sharedcomponents/InvoiceRow";
import baseUrl from "../api/BaseURL";
import {useSelector} from "react-redux";


const OrderScreen = ({ route, navigation }) => {
  const token = useSelector(state => state.auth.token);
  const [orders, setOrders] = useState([]);
  const shoppingCart = useSelector(state => state.cart.shoppingCart);
  const [loading, setLoading] = useState(false);
  const loadInvoices = async () => {
    setLoading(true);
    try{
      const response = await fetch(baseUrl+"/invoice",{
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization":token
        }
      });
      if(response.ok){
        const json = await response.json();
        setOrders(json);
        setLoading(false);
      }
    }catch(err){
      setLoading(false);
      Alert.alert(err.status+"");
    }
  }
  useEffect(() => {
    loadInvoices();
  }, [shoppingCart]);

  if(loading){
    return (
      <ActivityIndicator
        size="large"
        color="#E0E0E0"
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      />
    );
  }else{
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <InvoiceRow
            invoiceId={item._id}
            address={item.address}
            status={item.status}
            onPress={() =>
              navigation.navigate('InvoiceDetailScreen',{
                invoiceDetails:item.getInvoiceDetails,
                total:item.total,
                id:item._id
              })
            }
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );}
};

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
export default OrderScreen;
