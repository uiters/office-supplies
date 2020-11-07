import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerButton from "../components/homeheader/DrawerButton"
import ProfileScreen from "../screens/ProfileScreen"
import ChangePasswordScreen from "../screens/ChangePasswordScreen"
import BackButton from "../components/sharedcomponents/BackButton";



const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <DrawerButton onOpenDrawer = {() => navigation.openDrawer()}/>,
          title:"Profile"
        })}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <BackButton onPress = {() => navigation.goBack()}/>,
          title:"Profile"
        })}
      />
    </Stack.Navigator>
    
  );
};

export default ProfileNavigator;

