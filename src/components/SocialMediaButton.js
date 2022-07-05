import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SocialMediaButton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <TouchableOpacity
        style={[styles.button, { borderColor: "#3B5998", borderWidth: 1 }]}
      >
        <AntDesign name="facebook-square" size={16} color="#3B5998" />
        <Text style={[styles.name, { marginLeft: 20, color: "#3B5998" }]}>
          Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderColor: "#1DA1F2", borderWidth: 1 }]}
      >
        <AntDesign name="twitter" size={16} color="#1DA1F2" />
        <Text style={[styles.name, { marginLeft: 25, color: "#1DA1F2" }]}>
          Twitter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialMediaButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: "47%",
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontFamily: "ProductSans-Medium",
  },
});
