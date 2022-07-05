import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const CategoryInternet = ({ item }) => {
  return (
    <LinearGradient
      colors={["#E52D27", "#B31217"]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 0.8, y: 0.9 }}
      style={styles.container}
    >
      <Text
        style={{
          fontFamily: "ProductSans-Medium",
          color: "#FFF",
          fontSize: 14,
        }}
      >
        {item.name}
      </Text>
    </LinearGradient>
  );
};

export default CategoryInternet;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: 120,
    marginRight: 10,
    justifyContent: "center",
    paddingVertical: 2,
    borderRadius: 6,
    height: 60,
  },
});
