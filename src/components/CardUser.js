import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CardUser = () => {
  return (
    <>
      {/* Header Info TSEL */}
      <LinearGradient
        colors={["#E52D27", "#B31217"]}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 0.8, y: 0.9 }}
        //   locations={[0.2, 0.6, 0.9]}
        style={styles.headerInfoTSEL}
      >
        {/* User Number */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "ProductSans-Bold",
              fontSize: 20,
              color: "#FFF",
            }}
          >
            081290112333
          </Text>
          <Image source={require("../../assets/images/simpati-logo.png")} />
        </View>

        {/* Sisa Pulsa */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 20,
            marginBottom: 10,
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "ProductSans-Medium",
                fontSize: 15,
                color: "#FFF",
              }}
            >
              Sisa Pulsa Anda
            </Text>
            <Text
              style={{
                fontFamily: "ProductSans-Bold",
                fontSize: 26,
                color: "#FFF",
                marginTop: 10,
              }}
            >
              Rp. 55.000
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#F7B731",
              borderRadius: 7,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              height: 36,
            }}
          >
            <Text style={{ fontFamily: "ProductSans-Medium" }}>Isi Pulsa</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 0.18,
            backgroundColor: "#1E272E",
            opacity: 0.4,
          }}
        ></View>

        {/* Info */}
        <View style={{ marginTop: 10, marginHorizontal: 25 }}>
          <Text
            style={{
              fontFamily: "ProductSans-Regular",
              fontSize: 16,
              color: "#FFF",
            }}
          >
            Berlaku sampai{" "}
            <Text style={{ fontFamily: "ProductSans-Bold" }}>19 Juli 2022</Text>{" "}
            {"\n"}Telkomsel POIN{"   "}
            <View
              style={{
                backgroundColor: "#F7B731",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                marginTop: -4,
                width: 35,
                padding: 4,
              }}
            >
              <Text style={{ fontFamily: "ProductSans-Bold" }}>172</Text>
            </View>{" "}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFF",
            width: 60,
            height: 70,
            position: "absolute",
            bottom: -35,
            right: -26,
            transform: [{rotate: '45deg',}]
          }}
        ></View>
      </LinearGradient>
    </>
  );
};

export default CardUser;

const styles = StyleSheet.create({
  headerInfoTSEL: {
    paddingVertical: 15,
    borderRadius: 10,
    position: "absolute",
    bottom: -105,
    width: "105%",
    right: 0,
    left: 18,
  },
});
