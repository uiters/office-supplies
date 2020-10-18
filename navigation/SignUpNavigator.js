import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeHeader from "../components/homeheader/HomeHeader";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import ProductByCategoryScreen from "../screens/ProductByCategoryScreen";
import ProductByDetailsHeader from "../components/productbydetailscreen/ProductByDetailsHeader";
import SignUpScreen from "../screens/SignUpScreen";
import DrawerButton from "../components/homeheader/DrawerButton"

const Stack = createStackNavigator();

const SignUpNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <DrawerButton onOpenDrawer = {() => navigation.openDrawer()}/>,
          title:"Sign Up"
        })}
      />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;

