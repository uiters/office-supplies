import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { AppLoading } from "expo";


function App() {

  
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
