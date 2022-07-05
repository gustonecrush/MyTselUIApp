import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CardInternet = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.kuota}>{item.kuota} GB</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F1F2F6",
            paddingVertical: 5,
            paddingHorizontal: 7,
            borderRadius: 8,
          }}
        >
          <MaterialCommunityIcons name="timer-sand-complete" />
          <Text style={styles.deadline}>{item.deadline} HARI</Text>
        </View>
        <MaterialCommunityIcons name="bookmark" color="#CED6E0" size={20} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "ProductSans-Regular",
              fontSize: 12,
              color: "#747D8C",
              textDecorationLine: "line-through",
            }}
          >
            Rp {item.oriPrice}
          </Text>
          <Text
            style={{
              fontFamily: "ProductSans-Bold",
              fontSize: 16,
              color: "#EC2028",
            }}
          >
            {item.discPrice}
          </Text>
        </View>
        <Text style={{ fontFamily: "ProductSans-Medium" }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardInternet;

const styles = StyleSheet.create({
  container: {
    borderColor: "#F1F2F6",
    borderWidth: 1,
    padding: 16,
    width: 240,
    marginRight: 15,
    borderRadius: 6,
  },
  deadline: {
    fontFamily: "ProductSans-Medium",
    fontSize: 11,
  },
  kuota: {
    fontFamily: "ProductSans-Bold",
    fontSize: 23,
  },
});
