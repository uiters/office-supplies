import React, { useState } from "react";
import { ImageBackground, Text, View, StyleSheet, Alert } from "react-native";
import DrawerButton from "./DrawerButton";
import ShoppingCartButton from "./ShoppingCartButton";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {useSelector} from "react-redux"

const fetchFonts = () => {
  return Font.loadAsync({
    "SansitaSwashed-BlackItalic": require("../../assets/fonts/SansitaSwashed-BlackItalic.ttf"),
    "SansitaSwashed-MediumItalic": require("../../assets/fonts/SansitaSwashed-MediumItalic.ttf"),
  });
};

const HomeHeader = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  const availableUser = useSelector(state => state.auth.isAuthenticate);
const onPress = () =>{
  if(availableUser===false){
    navigation.navigate("SignInScreen")
  }else{
    navigation.navigate("ShoppingCartScreen")
  }
}
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  return (
    <ImageBackground
      source={{
        uri:
          "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
      }}
      style={styles.ImageBackground}
    >
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <DrawerButton onOpenDrawer={() => navigation.openDrawer()} />
          <Text style={styles.TextTitle}>Home</Text>
          <ShoppingCartButton onPress={onPress}/>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: 100,
  },
  container: {
    height: 100,
    paddingTop: 50,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextTitle: {
    color: "white",
    fontSize: 30,
    fontFamily: "SansitaSwashed-BlackItalic",
  },
});
export default HomeHeader;
