import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const NEWs = [
  {
    id: 1,
    name: "Internet OMG!",
    banner: require("../../assets/images/new-1.png"),
  },
  {
    id: 2,
    name: "Undian Ketengan",
    banner: require("../../assets/images/new-2.png"),
  },
];

const New = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 15, }}>
      {NEWs.map((item, index) => (
        <Image key={index} source={item.banner} style={{ marginRight: 15, }} />
      ))}
    </ScrollView>
  );
};

export default New;

const styles = StyleSheet.create({});
