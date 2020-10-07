import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from './StackNavigator';
import DrawerContent from '../components/drawer/DrawerContent';




const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={StackNavigator} />
       
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
