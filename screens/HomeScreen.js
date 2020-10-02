import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DrawerButton from '../components/DrawerButton';
import ShoppingCartButton from '../components/ShoppingCartButton';
import NavigateToSearchPageButton from '../components/NavigateToSearchPageButton';

const HomeScreen = ({ route, navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerButton onOpenDrawer={()=>navigation.openDrawer()}/>
      ),
      headerRight: () => (
        <ShoppingCartButton/>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <View>
        <NavigateToSearchPageButton/>
      </View>
    </View>
  );
};

export default HomeScreen;
