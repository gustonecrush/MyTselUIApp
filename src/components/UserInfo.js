import React from "react";
import { StyleSheet, Text, View } from "react-native";

const USERDATA = [
  { id: 1, name: "Internet", data: 12.19 },
  { id: 2, name: "Telpon", data: 0 },
  { id: 3, name: "SMS", data: 23 },
];

const UserInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
      }}
    >
      {USERDATA.map((user) => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.data}>
            {user.data}{" "}
            <Text style={styles.keterangan}>
              {user.id == 1 ? "GB" : user.id == 2 ? "Min" : "SMS"}
            </Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  card: {
    shadowColor: "rgba(100,100,111,.2)",
    shadowOffset: { width: 1, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.7,
    backgroundColor: "#FFF",
    width: "31%",
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 8,
  },
  name: {
    fontFamily: "ProductSans-Medium",
    marginBottom: 2,
  },
  data: {
    fontFamily: "ProductSans-Bold",
    fontSize: 24,
    color: "#EC2028",
  },
  keterangan: {
    fontFamily: "ProductSans-Regular",
    color: "#747D8C",
    fontSize: 14,
  },
});

// box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
