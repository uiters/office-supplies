import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeHeader from "../components/homeheader/HomeHeader";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";
import ProductByCategoryScreen from "../screens/ProductByCategoryScreen";
import ProductByDetailsHeader from "../components/productbydetailscreen/ProductByDetailsHeader";

const Stack = createStackNavigator();

const stackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header:({ navigation }) => <HomeHeader navigation={navigation}/>
        }}
      />
      <Stack.Screen name="ProductDetailScreen" 
      component={ProductDetailScreen}
      options={{
        header:({ navigation }) => <ProductDetailHeader navigation={navigation}/>
      }} 
      />
       <Stack.Screen name="ProductByCategoryScreen" 
      component={ProductByCategoryScreen}
      options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default stackNavigator;

