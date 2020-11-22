import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

const ConfirmBuyItemButton = props =>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
            <FontAwesome5 name="shopping-bag" size={24} color="white" />
            <Text style={styles.text}>BUY NOW</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        marginTop:50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#90EE90",
        marginHorizontal:60,
        height:50,
        marginBottom:20
    },
    text:{
        width:150,
        fontSize:20,
        marginLeft:30,
        color:"white"
    }
});

export default ConfirmBuyItemButton;