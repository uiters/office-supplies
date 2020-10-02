import * as React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import DrawerButton from "./DrawerButton";
import ShoppingCartButton from "./ShoppingCartButton"

const ScreenTitle = (props,navigation) => {
  return (
    <View>
      {console.log(props,navigation)}
      <ImageBackground
        style={styles.container}
        source={{
          uri:
            "https://bgfons.com/uploads/light/light_texture2297.jpg",
        }}
      >
        <View style={styles.subcontainer}>
          <DrawerButton onOpenDrawer={() => props.navigation.openDrawer()}/>
          <Text style={styles.TextTitle}>Home</Text>
          <ShoppingCartButton/>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    width:390,
    paddingVertical:10,
    height:80
  },
  subcontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  TextTitle:{
    fontWeight:"bold",
    fontSize:30
  }
});
export default ScreenTitle;
