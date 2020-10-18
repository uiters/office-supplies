import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import DrawerContent from "../components/drawer/DrawerContent";
import SignUpNavigator from "./SignUpNavigator";
import SignInNavigator from "./SignInNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen
        name="SignUp"
        component={SignUpNavigator}
      />
      <Drawer.Screen
        name="SignIn"
        component={SignInNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
