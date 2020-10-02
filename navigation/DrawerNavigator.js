import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DetailScreen from "../screens/DetailScreen";
import StackNavigator from './StackNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Account" component={DetailScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
