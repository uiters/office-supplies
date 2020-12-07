import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeHeader from "../components/homeheader/HomeHeader";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import ProductByCategoryScreen from "../screens/ProductByCategoryScreen";
import SignInNavigator from "../navigation/SignInNavigator";
import ShoppingCartNavigator from "../navigation/ShoppingCartNavigator";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createStackNavigator();

const stackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => <HomeHeader navigation={navigation} />,
        }}
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
        name="ProductByCategoryScreen"
        component={ProductByCategoryScreen}
        options={({ route }) => ({ title: route.params.title })}
      />

      <Stack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartNavigator}
        options={({ route }) => ({ title: "Shopping Cart" })}
      />

      <Stack.Screen
        name="SignInScreen"
        component={SignInNavigator}
        options={({ route }) => ({ title: "Sign In" })}
      />

    </Stack.Navigator>
  );
};

export default stackNavigator;
