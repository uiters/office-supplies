import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DrawerContent = (props) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Phat Ngo</Title>
                <Caption style={styles.caption}>Hello Hello</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {}}
            />
            <View style={{flexDirection:"row"}}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="message-outline" color={color} size={size} />
              )}
              label="Messages"
              onPress={() => {}}
              style={{width:"80%"}}
            />
            <View style={{width:"20%", alignItems:"center", justifyContent:"center", flex:1}}>
              <Text style={{fontWeight:"bold", color:"red"}}>0</Text>
            </View>
            </View>
          </Drawer.Section>

          <Drawer.Section title="My Information">
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cart-outline" color={color} size={size} />
              )}
              label="Shopping Cart"
              onPress={() => {
                {
                }
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="bookmark-multiple-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bookmarks"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bag-personal-outline" color={color} size={size} />
              )}
              label="Purchases"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Image
                  source={require("../assets/coupon.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              )}
              label="Sellings"
              onPress={() => {}}
            />
          </Drawer.Section>

          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <Image
                  source={require("../assets/menu.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              )}
              label="Categories"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
