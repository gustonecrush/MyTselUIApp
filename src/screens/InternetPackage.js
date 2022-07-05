import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import CardInternet from "../components/CardInternet";
import CategoryInternet from "../components/CategoryInternet";

const LANGGANAN = [
  {
    id: 1,
    name: "Internet OMG!",
    kuota: 14,
    deadline: 30,
    oriPrice: 99000,
    discPrice: "Rp 96000",
  },
  {
    id: 2,
    name: "iPhone Plan",
    kuota: 27,
    deadline: 30,
    oriPrice: 145000,
    discPrice: "Rp 133000",
  },
];

const POPULAR = [
  {
    id: 1,
    name: "Internet OMG!",
    kuota: 30,
    deadline: 60,
    oriPrice: 200000,
    discPrice: "Rp 189000",
  },
  {
    id: 2,
    name: "iPhone Plan",
    kuota: 27,
    deadline: 30,
    oriPrice: 145000,
    discPrice: "Rp 133000",
  },
];

const BELAJAR = [
  {
    id: 1,
    name: "RuangGuru",
    kuota: 30,
    deadline: 30,
    oriPrice: null,
    discPrice: "FREE",
  },
  {
    id: 2,
    name: "IlmuPedia",
    kuota: 27,
    deadline: 30,
    oriPrice: null,
    discPrice: "FREE",
  },
  {
    id: 2,
    name: "IlmuPedia",
    kuota: 3,
    deadline: 30,
    oriPrice: null,
    discPrice: 25000,
  },
];

const CATEGORIES = [
  { id: 1, name: "MyTelkomsel Reward" },
  { id: 2, name: "Internet Mingguan" },
  { id: 3, name: "COMBO SAKTI" },
  { id: 4, name: "iPhone Plan" },
  { id: 5, name: "Internet OMG!" },
  { id: 6, name: "Extra Unlimited" },
  { id: 7, name: "Kuota Keluarga" },
  { id: 8, name: "Ketengan Utama" },
];

const CATEGORIES2 = [
  { id: 9, name: "Ketengan Tiktok" },
  { id: 10, name: "Ketengan Youtube" },
  { id: 11, name: "Ketengan Instagram" },
  { id: 12, name: "Ketengan Facebook" },
  { id: 13, name: "Pendidika" },
  { id: 14, name: "Bundling ClodMAX" },
  { id: 15, name: "Paket Internet Malam" },
];

const InternetPackage = ({ navigation }) => {
  const [loaded] = useFonts({
    "ProductSans-Medium": require("../../assets/fonts/ProductSans-Medium.ttf"),
    "ProductSans-Bold": require("../../assets/fonts/ProductSans-Bold.ttf"),
    "ProductSans-Regular": require("../../assets/fonts/ProductSans-Regular.ttf"),
  });

  if (!loaded) return false;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* Status Bar */}
      <StatusBar style="dark" />
      <ScrollView
        style={{ marginHorizontal: 25 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={35} />
          </TouchableOpacity>

          <Text style={styles.headingText}>Paket Internet</Text>
          <Text></Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#A4B0BE" />
          <TextInput
            placeholder="Cari paket favorit kamu"
            style={styles.textInput}
            placeholderTextColor="#A4B0BE"
          />
        </View>

        {/* Banners */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          <TouchableOpacity style={styles.bannerClick}>
            <Image
              source={require("../../assets/images/new-1.png")}
              style={styles.banner}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bannerClick}>
            <Image
              source={require("../../assets/images/new-2.png")}
              style={styles.banner}
            />
          </TouchableOpacity>
        </ScrollView>

        {/* Langganan Kamu */}
        <Text style={styles.heading}>Langganan Kamu</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {LANGGANAN.map((item, index) => (
            <CardInternet item={item} key={index} />
          ))}
        </ScrollView>

        {/* Kategori */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.heading}>Kategori</Text>
          <Text style={{ color: "#EC2028", fontFamily: "ProductSans-Regular" }}>
            Lihat Semua
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CATEGORIES.map((item, index) => (
            <CategoryInternet item={item} key={index} />
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          {CATEGORIES2.map((item, index) => (
            <CategoryInternet item={item} key={index} />
          ))}
        </ScrollView>

        {/* Popular */}
        <Text style={styles.heading}>Popular</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {POPULAR.map((item, index) => (
            <CardInternet item={item} key={index} />
          ))}
        </ScrollView>

        {/* Belajar #dirumahaja */}
        <Text style={styles.heading}>Belajar #dirumahaja</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {BELAJAR.map((item, index) => (
            <CardInternet item={item} key={index} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InternetPackage;

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  headingText: {
    fontFamily: "ProductSans-Medium",
    fontSize: 18,
    marginLeft: -25,
  },
  searchBar: {
    backgroundColor: "#F1F2F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  textInput: {
    color: "#A4B0BE",
    fontFamily: "ProductSans-Regular",
    marginLeft: 15,
  },
  banner: {
    width: 210,
    height: 90,
    resizeMode: "contain",
  },
  bannerClick: {
    marginRight: 15,
  },
  heading: {
    fontFamily: "ProductSans-Bold",
    fontSize: 17,
    marginVertical: 20,
  },
});
