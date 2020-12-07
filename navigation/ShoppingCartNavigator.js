import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import DrawerButton from "../components/homeheader/DrawerButton";
import ProductDetailScreenWithoutCart from "../screens/ProductDetailScreenWithoutCart";
import ProductDetailHeaderWithoutCart from "../components/sharedcomponents/ProductDetailHeaderWithoutCart";
import ThankYouScreen from "../screens/ThankYouScreen";
import BackButton from "../components/sharedcomponents/BackButton";
import StackNavigator from "../navigation/StackNavigator";

const Stack = createStackNavigator();

const ShoppingCartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <DrawerButton onOpenDrawer={() => navigation.openDrawer()} />
          ),
          title: "Shopping Cart",
        })}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreenWithoutCart}
        options={{
          header: ({ navigation }) => (
            <ProductDetailHeaderWithoutCart navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="ThankYouScreen"
        component={ThankYouScreen}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartNavigator;
