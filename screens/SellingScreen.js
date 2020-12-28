import React, { useState } from "react";
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator, FlatList} from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import baseURL from "../api/BaseURL";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";

const SellingScreen = ({ route, navigation }) => {
  const [sellingItems, setSellingItems] = useState([]);
  const email = useSelector((state) => state.auth.email);
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);
  const [loading, setLoading] = useState(false);
  const userId = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.auth.token);
  const [pageIndex, setPageIndex] = useState(1);
  const [isRenderFooterVisible, setIsRenderFooterVisible] = useState(false);

  const onGetSellingProducts = async (index) => {
    setLoading(true);
    try {
      const response = await fetch(
        baseURL + "/product/user-products/" + userId + "?page=" + index+"?",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (response.ok) {

        const json = await response.json();
        if(json.result.length>=10){
          setIsRenderFooterVisible(true);
        }else{
          setIsRenderFooterVisible(true);
        }
        if(index===1){
          await setSellingItems(json.result);
        }
        else{
          const arr=[...sellingItems,...json.result];
          await setSellingItems(arr);
        }
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    await onGetSellingProducts(pageIndex+1);
    await setPageIndex(pageIndex+1);
  };
  useEffect(() => {
    onGetSellingProducts(1);
  }, [email, shoppingCart]);
  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}
        >
          <Text style={styles.btnText}>Load More</Text>
        </TouchableOpacity>
      </View>
    );
  };
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#E0E0E0"
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      />
    );
  } else {
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
          ListFooterComponent={isRenderFooterVisible ? renderFooter : null}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 10,
  },
  filterTitle: {
    paddingTop: 5,
    fontSize: 18,
    marginRight: 10,
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    marginTop: 30,
  },
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: "#800000",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
});
export default SellingScreen;
