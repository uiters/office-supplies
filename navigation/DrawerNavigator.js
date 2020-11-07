import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import DrawerContent from "../components/drawer/DrawerContent";
import SignUpNavigator from "./SignUpNavigator";
import SignInNavigator from "./SignInNavigator";
import ShoppingCartNavigator from "./ShoppingCartNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import ProductDetailNavigator from "../navigation/ProductDetailNavigator"
import BookMarkNavigator from "./BookMarkNavigator";
import PurchasesNavigator from "./PurchaseNavigator";
import SellingNavigator from "./SellingNavigator";
import ProfileNavigator from "./ProfileNavigator";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="SignUp" component={SignUpNavigator} />
      <Drawer.Screen name="SignIn" component={SignInNavigator} />
      <Drawer.Screen name="ShoppingCart" component={ShoppingCartNavigator} />
      <Drawer.Screen name="Bookmark" component={BookMarkNavigator} />
      <Drawer.Screen name="Purchases" component={PurchasesNavigator} />
      <Drawer.Screen name="Selling" component={SellingNavigator} />
      <Drawer.Screen name="Profile" component={ProfileNavigator}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
