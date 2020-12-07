import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerButton from "../components/homeheader/DrawerButton"
import SellingScreen from "../screens/SellingScreen";
import ProductDetailScreen from "../screens/ProductDetailScreenWithoutCart";
import ProductDetailHeader from "../components/productdetailheadbar/ProductDetailHeader";


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
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={({route}) => ({
          header: ({ navigation }) => (
            <ProductDetailHeader navigation={navigation} route={route} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default SellingNavigator;

