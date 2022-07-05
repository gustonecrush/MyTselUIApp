import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#EC2028",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar hidden />
      <Image source={require("../../assets/images/logo.png")} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
