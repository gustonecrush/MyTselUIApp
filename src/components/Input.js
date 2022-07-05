import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ title, placeholder }) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: "ProductSans-Bold",
    fontSize: 15,
    marginBottom: 10,
  },
  textInput: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderColor: "#CED6E0",
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "ProductSans-Medium",
    marginBottom: 15,
  },
});
