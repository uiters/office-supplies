import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import DrawerButton from "../components/homeheader/DrawerButton"
import ProductDetailScreenWithoutCart from "../screens/ProductDetailScreenWithoutCart";
import ProductDetailHeaderWithoutCart from "../components/sharedcomponents/ProductDetailHeaderWithoutCart";
import BookMarkScreen from "../screens/BookMarkScreen";
import BookmarkButton from "../components/sharedcomponents/BookmarkButton";



const Stack = createStackNavigator();

const BookMarkNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookMarkScreen"
        component={BookMarkScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <DrawerButton onOpenDrawer = {() => navigation.openDrawer()}/>,
          title:"Bookmarks"
        })}
      />
      <Stack.Screen name="ProductDetailScreen" 
      component={ProductDetailScreen}
      options={{
        header:({ navigation }) => <ProductDetailHeader navigation={navigation}/>
      }} 
      />
    </Stack.Navigator>
  );
};

export default BookMarkNavigator;

