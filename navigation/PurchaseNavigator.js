import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import DrawerButton from "../components/homeheader/DrawerButton"
import ProductDetailScreenWithoutCart from "../screens/ProductDetailScreenWithoutCart";
import ProductDetailHeaderWithoutCart from "../components/sharedcomponents/ProductDetailHeaderWithoutCart";
import PurchasesScreen from "../screens/PurchasesScreen";
import BookmarkButton from "../components/sharedcomponents/BookmarkButton";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";



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
      <Stack.Screen name="ProductDetailScreen" 
      component={ProductDetailScreen}
      options={{
        header:({ navigation }) => <ProductDetailHeader navigation={navigation}/>
      }} 
      />
       <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} 
      options={({ route }) => ({ title: "Shopping Cart" })}/>
    </Stack.Navigator>
  );
};

export default PurchasesNavigator;

