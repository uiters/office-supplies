import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsRow from "../components/sharedcomponents/ProductDetailsRow"


const ProductDetailScreenWithoutCart = ({ navigation, route }) => {
  const availableUser = useSelector((state) => state.auth.isAuthenticate);
  const [array,setArray] = useState([]);
  const {
    source,
    title,
    description,
    price,
    id,
    remainingQuantity,
    userId,
    typeId,
    categoriesId,
    productDetails
  } = route.params;

  const dispatch = useDispatch();

  const arr = () => {
    let arrr=[];
    for(const key in productDetails){
      arrr.push({key, value:productDetails[key]});
      console.log(arrr);
    }
    setArray(arrr);
  } 

  useEffect(() => {
    arr()
  }, [])
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
        }}
        style={styles.ImageBackground}
      >
        
        <Image
          source={{
            uri: source,
          }}
          style={styles.Image}
        />
        <View style={styles.subcontainer}>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Product Name:</Text>
              <Text style={styles.subContainerInfoProp}>{title}</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Product Type(s):</Text>
              <Text style={styles.subContainerInfoProp}>{typeId.typeName}</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Categorie(s):</Text>
              <Text style={styles.subContainerInfoProp}>{categoriesId}</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Description:</Text>
              <Text style={styles.subContainerInfoProp}>{description}</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Price:</Text>
              <Text style={styles.subContainerInfoProp}>{price}</Text>
              <Text style={styles.subContainerInfoProp}>VND</Text>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>
                Remaining Quantit(ies):
              </Text>
              <Text style={styles.subContainerInfoProp}>
                {remainingQuantity}
              </Text>
            </View>
            <View style={styles.subContainerInfoVertical}>
              <Text style={styles.subContainerInfoTitle}>
                Product Details:
              </Text>
              <View>
              {array && array.map(item => <ProductDetailsRow keyy={item.key} value={item.value}/>)}
              </View>
            </View>
            <View style={styles.subContainerInfo}>
              <Text style={styles.subContainerInfoTitle}>Sold By:</Text>
              <Text style={styles.subContainerInfoEmail}>{userId.email}</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: "100%",
  },
  container: {
    height: "100%",
  },
  subcontainer: {
    backgroundColor: "white",
    borderTopWidth: 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    height: "100%",
    width: "100%",
    flex: 1,
  },
  Image: {
    marginTop: 20,
    height: 300,
    marginHorizontal: 120,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    backgroundColor: "#E8E8E8",
  },
  subContainerInfo: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 30,
  },
  subContainerInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    marginRight: 10,
  },
  subContainerInfoProp: {
    fontSize: 18,
    marginRight: 5,
    textTransform: 'capitalize'
  },
  subContainerInfoEmail: {
    fontSize: 18,
    marginRight: 5,
  },
  subContainerInfoVertical:{
    marginTop: 20,
    marginLeft: 30,
    flexDirection:"column"
  }
});
export default ProductDetailScreenWithoutCart;
