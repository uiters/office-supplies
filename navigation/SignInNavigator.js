import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeHeader from "../components/homeheader/HomeHeader";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import ProductByCategoryScreen from "../screens/ProductByCategoryScreen";
import ProductByDetailsHeader from "../components/productbydetailscreen/ProductByDetailsHeader";
import SignInScreen from "../screens/SignInScreen";
import DrawerButton from "../components/homeheader/DrawerButton"
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createStackNavigator();

const SignInNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <DrawerButton onOpenDrawer = {() => navigation.openDrawer()}/>,
          title:"Sign In"
        })}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={({ route }) => ({ title: "Forget Password" })}
      />
    </Stack.Navigator>
  );
};

export default SignInNavigator;

