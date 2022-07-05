import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import CardUser from "../components/CardUser";
import UserInfo from "../components/UserInfo";
import Categories from "../components/Categories";
import New from "../components/New";
import Covid from "../components/Covid";
import LinkAja from "../components/LinkAja";
import Voucher from "../components/Voucher";
import PenawaranKhusus from "../components/PenawaranKhusus";

const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    "ProductSans-Medium": require("../../assets/fonts/ProductSans-Medium.ttf"),
    "ProductSans-Bold": require("../../assets/fonts/ProductSans-Bold.ttf"),
    "ProductSans-Regular": require("../../assets/fonts/ProductSans-Regular.ttf"),
  });

  if (!loaded) return false;

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", paddingBottom: 50 }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Header */}
        <View style={styles.headerContainer}>
          {/* Header Name */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.name}>
              Hai,{" "}
              <Text style={{ fontFamily: "ProductSans-Bold" }}>Muhammad</Text>
            </Text>
            <Ionicons name="qr-code-outline" color="white" size={23} />
          </View>

          <CardUser />
        </View>

        {/* Data Info */}
        <View style={{ marginTop: 130, marginHorizontal: 20 }}>
          <UserInfo />
        </View>

        {/* Divider */}
        <View
          style={{
            width: "100%",
            height: 10,
            marginTop: 25,
            backgroundColor: "#F1F2F6",
          }}
        ></View>

        {/* Kategori Paket */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {/* Heading */}
          <Text style={styles.heading}>Kategori Paket</Text>
          <Categories />
        </View>

        {/* Terbaru dari Telkomsel */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {/* Heading */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.heading}>Terbaru dari Telkomsel</Text>
            <Text
              style={{ color: "#EC2028", fontFamily: "ProductSans-Regular" }}
            >
              Lihat Semua
            </Text>
          </View>

          <New />
        </View>

        {/* Tanggap COVID-19 */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {/* Heading */}
          <Text style={styles.heading}>Tanggap COVID-19</Text>
          <Covid />
        </View>

        {/* AYO! Pakai LinkAja! */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {/* Heading */}
          <Text style={styles.heading}>AYO! Pakai LinkAja!</Text>
          <Text style={styles.textAgreement}>
            Pakai LinkAja untuk beli pulsa, beli paket data, dan bayar tagihan
            lebih mudah
          </Text>
          <LinkAja />
        </View>

        {/* Cari Voucher, Yuk! */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {/* Heading */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.heading}>Cari Voucher, Yuk!</Text>
            <Text
              style={{ color: "#EC2028", fontFamily: "ProductSans-Regular" }}
            >
              Lihat Semua
            </Text>
          </View>
          <Voucher />
        </View>

        {/* Penawaran Khusus */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {/* Heading */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.heading}>Penawaran Khusus</Text>
            <Text
              style={{ color: "#EC2028", fontFamily: "ProductSans-Regular" }}
            >
              Lihat Semua
            </Text>
          </View>

          <PenawaranKhusus />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#EC2028",
    paddingHorizontal: 25,
    height: 200,
    paddingVertical: 55,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  name: {
    fontFamily: "ProductSans-Regular",
    fontSize: 20,
    color: "#FFF",
  },
  heading: {
    fontFamily: "ProductSans-Bold",
    fontSize: 18,
  },
  textAgreement: {
    fontFamily: "ProductSans-Regular",
    marginTop: 10,
    fontSize: 15,
  },
});
