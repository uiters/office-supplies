import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeHeader from "../components/homeheader/HomeHeader";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import ProductByCategoryScreen from "../screens/ProductByCategoryScreen";
import ProductByDetailsHeader from "../components/productbydetailscreen/ProductByDetailsHeader";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import DrawerButton from "../components/homeheader/DrawerButton"
import ProductDetailScreenWithoutCart from "../screens/ProductDetailScreenWithoutCart";
import ProductDetailHeaderWithoutCart from "../components/sharedcomponents/ProductDetailHeaderWithoutCart";

const Stack = createStackNavigator();

const ShoppingCartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <DrawerButton onOpenDrawer = {() => navigation.openDrawer()}/>,
          title:"Shopping Cart"
        })}
      />
      <Stack.Screen name="ProductDetailScreen" 
      component={ProductDetailScreenWithoutCart}
      options={{
        header:({ navigation }) => <ProductDetailHeaderWithoutCart navigation={navigation}/>
      }} 
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartNavigator;

