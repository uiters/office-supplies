import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const [sum, setSum] = React.useState(0);
  const { a, b } = route.params;
  return (
    <View>
      <Text>Detail Screen</Text>
      <Text>a: {a}</Text>
      <Text>b: {b}</Text>
      <Text>c: {a + b}</Text>
      <Button title="submit" onPress={()=>setSum(a+b)}/>
      <Button
        title="Go to Home"
        onPress={() => {
          console.log(sum);
          navigation.navigate("Home", { c: sum });}}
      />
    </View>
  );
};

export default DetailScreen;
