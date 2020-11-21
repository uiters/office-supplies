import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const AddToCartButton = props =>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
            <FontAwesome name="cart-plus" size={30} color="white" />
            <Text style={styles.text}>ADD TO CART</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#90EE90",
        marginHorizontal:60,
        height:50,
        borderWidth:0,
        borderRadius:30,
        marginBottom:20
    },
    text:{
        width:150,
        fontSize:20,
        marginLeft:10,
        color:"white"
    }
});

export default AddToCartButton;