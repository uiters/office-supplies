import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {store, persistor} from "./redux/store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
