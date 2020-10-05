import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import HomeHeader from "../components/homeheader/HomeHeader";

const Stack = createStackNavigator();

const stackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          height: 110,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header:({ navigation }) => <HomeHeader navigation={navigation}/>
        }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default stackNavigator;
