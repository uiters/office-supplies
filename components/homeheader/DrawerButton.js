import * as React from "react";
import {TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const DrawerButton = (props) =>{
    return(
        <TouchableOpacity style={{marginLeft:10}} onPress={()=>props.onOpenDrawer()}>
            <AntDesign name="bars" size={40} color="black" />
        </TouchableOpacity>
    );
}

export default DrawerButton;