import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BigButton = ({ title, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.container}
    >
      <Text style={{ color: "#FFF", fontFamily: "ProductSans-Bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EC2028",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
  },
});
