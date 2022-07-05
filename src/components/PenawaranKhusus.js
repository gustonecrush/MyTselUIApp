import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const COVIDS = [
  {
    id: 1,
    name: "Belajar Kini Makin Mudah dengan Paket ilmupedia!",
    banner: require("../../assets/images/khusus-1.png"),
  },
  {
    id: 2,
    name: "Terus Belajar dari Rumahmu dengan Ruangguru!",
    banner: require("../../assets/images/khusus-2.png"),
  },
];

const PenawaranKhusus = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginVertical: 15, paddingVertical: 10, paddingHorizontal: 10 }}
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
            width: "30%",
          }}
        >
          <Image
            source={covid.banner}
            style={{ width: "100%", resizeMode: "stretch" }}
          />
          <Text
            style={{
              fontFamily: "ProductSans-Medium",
              width: "90%",
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

export default PenawaranKhusus;

const styles = StyleSheet.create({});
