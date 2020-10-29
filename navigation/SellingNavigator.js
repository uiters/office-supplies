import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import DrawerButton from "../components/homeheader/DrawerButton"
import ProductDetailScreenWithoutCart from "../screens/ProductDetailScreenWithoutCart";
import ProductDetailHeaderWithoutCart from "../components/sharedcomponents/ProductDetailHeaderWithoutCart";
import PurchasesScreen from "../screens/PurchasesScreen";
import BookmarkButton from "../components/sharedcomponents/BookmarkButton";
import SellingScreen from "../screens/SellingScreen";



const Stack = createStackNavigator();

const SellingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SellingScreen"
        component={SellingScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <DrawerButton onOpenDrawer = {() => navigation.openDrawer()}/>,
          title:"Selling"
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

export default SellingNavigator;

