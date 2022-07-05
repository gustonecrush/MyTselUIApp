import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const COVIDS = [
  {
    id: 1,
    name: "Bayar Serba Cepat",
    banner: require("../../assets/images/banner-1.png"),
  },
  {
    id: 2,
    name: "Cukup Snap QR",
    banner: require("../../assets/images/banner-3.png"),
  },
  {
    id: 3,
    name: "NO! Credit Card",
    banner: require("../../assets/images/banner-4.png"),
  },
];

const LinkAja = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginVertical: 15, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: '#FFF' }}
    >
      {COVIDS.map((covid, index) => (
        <View
          key={index}
          style={{
            marginRight: 15,
            shadowColor: "rgba(100,100,111,.2)",
            shadowOffset: { width: 1, height: 7 },
            shadowRadius: 10,
            shadowOpacity: 0.8,
            backgroundColor: "#FFF",
            borderRadius: 10,
            paddingBottom: 10,
            width: 150,
          }}
        >
          <Image
            source={covid.banner}
            style={{ width: "100%", resizeMode: "stretch" }}
          />
          <Text
            style={{
              fontFamily: "ProductSans-Medium",
              width: "100%",
              fontSize: 16,
              marginTop: 5,
              marginLeft: 10,
            }}
          >
            {covid.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default LinkAja;

const styles = StyleSheet.create({});
