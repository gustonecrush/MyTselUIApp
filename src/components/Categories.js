import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CATEGORIES = [
  {
    id: 1,
    name: "Internet",
    icon: require("../../assets/images/internet.png"),
  },
  { id: 2, name: "Telpon", icon: require("../../assets/images/telpon.png") },
  { id: 3, name: "SMS", icon: require("../../assets/images/sms.png") },
  { id: 4, name: "Roaming", icon: require("../../assets/images/roaming.png") },
  { id: 5, name: "Hiburan", icon: require("../../assets/images/hiburan.png") },
  {
    id: 6,
    name: "Unggulan",
    icon: require("../../assets/images/unggulan.png"),
  },
  {
    id: 7,
    name: "Tersimpan",
    icon: require("../../assets/images/tersimpan.png"),
  },
  { id: 8, name: "Riwayat", icon: require("../../assets/images/riwayat.png") },
];

const Categories = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {CATEGORIES.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.category}
          onPress={() => navigation.navigate("InternetPackage")}
        >
          <View style={styles.iconWrapper}>
            <Image source={category.icon} style={styles.icon} />
          </View>
          <Text style={styles.name}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    width: "25%",
    alignItems: "center",
    marginVertical: 18,
  },
  iconWrapper: {
    // padding: 6,
    width: 50,
    height: 50,
    backgroundColor: "#FEF8EA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  name: {
    fontFamily: "ProductSans-Regular",
    marginTop: 10,
  },
  icon: {
    width: 30,
    resizeMode: "contain",
    height: 30,
  },
});
