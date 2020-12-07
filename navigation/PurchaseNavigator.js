import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerButton from "../components/homeheader/DrawerButton"
import PurchasesScreen from "../screens/PurchasesScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";



const Stack = createStackNavigator();

const PurchasesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PurchasesScreen"
        component={PurchasesScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <DrawerButton onOpenDrawer = {() => navigation.openDrawer()}/>,
          title:"Purchases"
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

export default PurchasesNavigator;

