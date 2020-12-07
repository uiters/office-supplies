import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import baseURL from "../api/BaseURL";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";

const SellingScreen = ({ route, navigation }) => {
  const [sellingItems, setSellingItems] = useState([]);
  const email = useSelector((state) => state.auth.email);
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);

  const onGetSellingProducts = async () => {
    console.log(email);
    try {
      const response = await fetch(baseURL + "/product/?page=1", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        const sellingItems = json.result.filter(
          (item) => item.userId.email === email
        );
        setSellingItems(sellingItems);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    onGetSellingProducts();
  }, [email, shoppingCart]);
  return (
    <View>
      <FlatList
      horizontal={false}
        numColumns={2}
        data={sellingItems}
        renderItem={({ item }) => (
          <HomeScreenBookFlatListItem
            source={item.productImage[0]}
            title={item.productName}
            price={item.price}
            onPress={() =>
              navigation.navigate("ProductDetailScreen", {
                source: item.productImage[0],
                title: item.productName,
                description: item.description,
                price: item.price,
                id: item.id,
                remainingQuantity: item.quantity,
                productDetails: item.productDetails,
                userId: item.userId,
                typeId: item.typeId,
                categoriesId: item.categoriesId.map(
                  (item) => item.categoryName
                ),
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SellingScreen;
