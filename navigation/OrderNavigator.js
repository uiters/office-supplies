import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerButton from "../components/homeheader/DrawerButton";
import OrderScreen from "../screens/OrderScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import InvoiceDetailScreen from "../screens/InvoiceDetailScreen";

const Stack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <DrawerButton onOpenDrawer={() => navigation.openDrawer()} />
          ),
          title: "Orders",
        })}
      />
      <Stack.Screen
        name="InvoiceDetailScreen"
        component={InvoiceDetailScreen}
        options={({ navigation, route }) => ({
          title: route.params.id,
        })}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
