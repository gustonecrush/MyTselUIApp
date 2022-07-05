import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === "Beranda")
      return isFocused ? (
        <AntDesign name="home" size={23} color={"#EC2028"} />
      ) : (
        <AntDesign name="home" size={23} color={"#747D8C"} />
      );
    if (label === "Riwayat")
      return isFocused ? (
        <AntDesign name="clockcircleo" size={23} color={"#EC2028"} />
      ) : (
        <AntDesign name="clockcircleo" size={23} color={"#747D8C"} />
      );
    if (label === "Bantuan")
      return isFocused ? (
        <Feather name="help-circle" size={23} color={"#EC2028"} />
      ) : (
        <Feather name="help-circle" size={23} color={"#747D8C"} />
      );
    if (label === "Inbox")
      return isFocused ? (
        <Feather name="mail" size={23} color={"#EC2028"} />
      ) : (
        <Feather name="mail" size={23} color={"#747D8C"} />
      );
    if (label === "Akun Saya")
      return isFocused ? (
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={23}
          color={"#EC2028"}
        />
      ) : (
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={23}
          color={"#747D8C"}
        />
      );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (isFocused) => ({
    fontSize: 12,
    color: isFocused ? "#EC2028" : "#747D8C",
    marginTop: 2,
    textAlign: "center",
  }),
});
