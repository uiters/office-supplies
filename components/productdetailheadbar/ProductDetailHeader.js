import React, { useState } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { AppLoading } from "expo";
import BackButton from "../sharedcomponents/BackButton";
import BookMarkedButton from "../sharedcomponents/BookmarkedButton";
import UnBookMarkedButton from "../sharedcomponents/UnBookMarkedButton";
import { addToBookMark, removeFromBookMark, removeEveryBookMarks } from "../../redux/actions/index";
import { useEffect } from "react";


const fetchFonts = () => {
  return Font.loadAsync({
    "SansitaSwashed-BlackItalic": require("../../assets/fonts/SansitaSwashed-BlackItalic.ttf"),
    "SansitaSwashed-MediumItalic": require("../../assets/fonts/SansitaSwashed-MediumItalic.ttf"),
  });
};

const ProductDetailHeader = ({ navigation, route }) => {
  const {
    source,
    title,
    description,
    price,
    id,
    remainingQuantity,
    userId,
    typeId,
    categoriesId,
    productDetails,
  } = route.params;

  const bookmarks = useSelector((state) => state.bookmark.bookmarks);
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);

  const res = () => {
    if(token===""){
      setIsBookMarked(false);
    }else{
    const user = bookmarks.find((item) => item.email === email)
    if(!user){
      setIsBookMarked(false);
    }else{
      const item = user.bookMarkedItems.find((item) => item.id === id);
    if (!item) {
      setIsBookMarked(false);
    } else {
      setIsBookMarked(true);
    }
    }}
  };
  const [isBookMarked, setIsBookMarked] = useState(false);
  const availableUser = useSelector((state) => state.auth.isAuthenticate);
  const [fontLoaded, setFontLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    res();
  }, [])

  const onBookMark = async () => {
    //dispatch(removeEveryBookMarks());
    if (availableUser === false) {
      navigation.navigate("SignInScreen");
    } else {
      if (isBookMarked === false) {
        await setIsBookMarked(true);
        await dispatch(
          addToBookMark(email, {
            source,
            title,
            description,
            price,
            id,
            remainingQuantity,
            userId,
            typeId,
            categoriesId,
            productDetails,
          })
        );
        
        
      } else {
        await setIsBookMarked(false);
        await dispatch(
          removeFromBookMark(email, id)
        );
        
      }
    }
  };
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  } else {
    if (isBookMarked === false) {
      return (
        <ImageBackground
          source={{
            uri:
              "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
          }}
          style={styles.ImageBackground}
        >
          <View style={styles.container}>
            <View style={styles.subcontainer}>
              <BackButton onPress={() => navigation.goBack()} />
              <Text style={styles.TextTitle}>DETAILS</Text>
              <UnBookMarkedButton onPress={onBookMark} />
            </View>
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          source={{
            uri:
              "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
          }}
          style={styles.ImageBackground}
        >
          <View style={styles.container}>
            <View style={styles.subcontainer}>
              <BackButton onPress={() => navigation.goBack()} />
              <Text style={styles.TextTitle}>DETAILS</Text>
              <BookMarkedButton onPress={onBookMark} />
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: 100,
  },
  container: {
    height: "100%",
    paddingTop: 50,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextTitle: {
    color: "white",
    fontSize: 25,
    fontFamily: "SansitaSwashed-MediumItalic",
  },
});
export default ProductDetailHeader;
