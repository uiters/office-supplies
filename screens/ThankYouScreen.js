import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


const ThankYouScreen = ({route}) => {
  const { invoiceId } = route.params;

  return (
    <ImageBackground
    source={{
      uri:"https://completeprojectresource.com/wp-content/uploads/2018/03/contact-us-form-background.jpg"
    }}
    style={styles.ImageBackground}
    >
    <View style={styles.container}>
      <AntDesign name="checkcircle" size={50} color="green" />
      {console.log(invoiceId)}
      <Text style={styles.tkText}>Thank You For Your Interest</Text>
      <Text style={styles.content}>
        Your invoice: <Text style={styles.invoiceId}>{invoiceId}</Text> will be processed and delivered to you as
        soon as possible.
      </Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:2,
    marginVertical:250,
    marginHorizontal:20,
    borderRadius:30,
    borderColor:"white"
  },
  tkText: {
    marginTop:10,
    marginBottom:20,
    fontSize:20,
    fontWeight:"bold",
    color:"white"
  },
  content: {
    marginHorizontal:10,
    fontSize:15,
    color:"white"
  },
  invoiceId:{
    fontWeight:"bold",
    fontSize:16
  },
  ImageBackground:{
    width:"100%",
    height:"100%"
  }
});
export default ThankYouScreen;
