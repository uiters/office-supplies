import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerButton from "../components/homeheader/DrawerButton"
import OrderScreen from "../screens/OrderScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";



const Stack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <DrawerButton onOpenDrawer = {() => navigation.openDrawer()}/>,
          title:"Orders"
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
       <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} 
      options={({ route }) => ({ title: "Shopping Cart" })}/>
    </Stack.Navigator>
  );
};

export default OrderNavigator;

