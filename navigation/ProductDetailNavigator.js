import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeHeader from "../components/homeheader/HomeHeader";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import ProductByCategoryScreen from "../screens/ProductByCategoryScreen";
import ProductByDetailsHeader from "../components/productbydetailscreen/ProductByDetailsHeader";

const Stack = createStackNavigator();

const ProductDetailNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          header: ({ navigation }) => (
            <ProductDetailHeader navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductDetailNavigator;
