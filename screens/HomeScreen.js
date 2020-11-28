import React, { useState, useEffect } from "react";
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
import { AppLoading } from "expo";
import data from "../fakedata/homebookflatitem";
import fakecategories from "../fakedata/fakecategories";
import * as Font from "expo-font";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";
import HomeScreenCategoryItem from "../components/homescreen/HomeScreenCategoryItem";
import baseURL from "../api/BaseURL";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

const fetchFonts = () => {
  return Font.loadAsync({
    "SansitaSwashed-BlackItalic": require("../assets/fonts/SansitaSwashed-BlackItalic.ttf"),
    "SansitaSwashed-MediumItalic": require("../assets/fonts/SansitaSwashed-MediumItalic.ttf"),
    "SansitaSwashed-ExtraBoldItalic": require("../assets/fonts/SansitaSwashed-ExtraBoldItalic.ttf"),
  });
};


const HomeScreen = ({ route, navigation }) => {
  const [text, setText] = useState("");
  const [fontLoaded, setFontLoaded] = useState(false);
  const [productTypeData, setProductTypeData] = useState([]);

  const onLoadProductType = async () =>{
    try{
      const response = await fetch(baseURL+"/product-type",{
        method:"GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
      if(response.ok){
        const json = await response.json();
        setProductTypeData(json.productType);
      }
    }catch(err){
      Alert.alert(err.status);
    }
  };

  useEffect(() => {
    onLoadProductType();
  })
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  } else {
    const onSubmitEditing = () => {
      console.log(text);
    };

    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
          }}
          style={styles.NewArrivalImageBackground}
        >
          <TextInput
            style={styles.TextInput}
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="What are you looking for?"
            onSubmitEditing={onSubmitEditing}
          />
        </ImageBackground>
        <ScrollView style={styles.ScrollView}>
          <View>
            <View style={styles.newarrival}>
              <Text style={styles.newarrivaltitle}>New Arrival:</Text>
              <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item }) => (
                  <HomeScreenBookFlatListItem
                    source={item.image}
                    title={item.title}
                    price={item.price}
                    onPress={() => navigation.navigate("ProductDetailScreen",{
                      source:item.image,
                      title:item.title,
                      summary:item.summary,
                      price:item.price,
                      id: item.id
                    })}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <View style={styles.homeCategory}>
            <Text style={styles.categoryTitle}>Categories:</Text>
            <FlatList
            horizontal={true}
              data={productTypeData}
              renderItem={({ item }) => (
                <HomeScreenCategoryItem
                  source={item.source}
                  title={item.typeName}
                  id={item.id}
                  onPress={() => navigation.navigate("ProductByCategoryScreen",{     
                    categories:item.categories, 
                    title:item.typeName                
                  })}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NewArrivalImageBackground: {
    height: 40,
    width: "100%",
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    paddingLeft: 15,
    width: "85%",
    borderColor: "gray",
    marginTop:15,
    borderWidth: 0.2,
    backgroundColor: "white",
    color: "black",
    textShadowColor: 0.5,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  ScrollView: {
    marginTop: 40,
  },
  newarrivaltitle: {
    marginLeft: 10,
    color: "black",
    fontSize: 25,
    fontFamily: "SansitaSwashed-MediumItalic",
  },
  homeCategory: {
    marginTop: 50,
  },
  categoryTitle: {
    marginLeft: 10,
    color: "black",
    fontSize: 25,
    fontFamily: "SansitaSwashed-ExtraBoldItalic",
  },
  categoryImageBackGround:{
    width:"100%",
    height:"100%"
  }
});

export default HomeScreen;
