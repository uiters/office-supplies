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
  TouchableOpacity,
  Image,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const ProductDetailsRow = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.keyy}: </Text>
            <Text>{props.value}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        marginLeft:100,
        marginTop:5
    },
    title:{
        fontSize:15,
        fontWeight:"bold",
        textTransform: 'capitalize'
    }
});
export default ProductDetailsRow;