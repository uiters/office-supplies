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
import { useDispatch, useSelector } from "react-redux";
import ProductWithQuantityItem from "../components/sharedcomponents/ProductWithQuantityItem";
import data from "../fakedata/homebookflatitem";
import HomeScreenCategoryItem from "../components/homescreen/HomeScreenBookFlatListItem";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";

const BookMarkScreen = ({ route, navigation }) => {
  const email = useSelector((state) => state.auth.email);
  const bookmarks = useSelector((state) => state.bookmark.bookmarks).find(item => item.email===email).bookMarkedItems;
  const [data, setData] = useState(bookmarks);
  return (
    <View>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={bookmarks}
        renderItem={({ item }) => (
          <HomeScreenBookFlatListItem
            source={item.source}
            title={item.title}
            price={item.price}
            onPress={() =>
              navigation.navigate("ProductDetailScreen", {
                source: item.source,
                title: item.title,
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

export default BookMarkScreen;
