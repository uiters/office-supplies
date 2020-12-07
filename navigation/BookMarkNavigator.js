import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import DrawerButton from "../components/homeheader/DrawerButton";
import BookMarkScreen from "../screens/BookMarkScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";


const Stack = createStackNavigator();

const BookMarkNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookMarkScreen"
        component={BookMarkScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <DrawerButton onOpenDrawer={() => navigation.openDrawer()} />
          ),
          title: "Bookmarks",
        })}
      />
       <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={({route}) => ({
          header: ({ navigation }) => (
            <ProductDetailHeader navigation={navigation} route={route} />
          ),
        })}
      />
      <Stack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
        options={({ route }) => ({ title: "Shopping Cart" })}
      />
    </Stack.Navigator>
  );
};

export default BookMarkNavigator;
