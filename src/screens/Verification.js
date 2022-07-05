import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Input from "../components/Input";
import BigButton from "../components/BigButton";

const Verification = () => {
  const [loaded] = useFonts({
    "ProductSans-Medium": require("../../assets/fonts/ProductSans-Medium.ttf"),
    "ProductSans-Bold": require("../../assets/fonts/ProductSans-Bold.ttf"),
    "ProductSans-Regular": require("../../assets/fonts/ProductSans-Regular.ttf"),
    "ProductSans-Light": require("../../assets/fonts/ProductSans-Light.ttf"),
  });

  if (!loaded) return false;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* Status Bar */}
      <StatusBar hidden={false} />
      {/* Illustration */}
      <View style={{ marginHorizontal: 25 }}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/images/image-2.png")}
            style={{ width: 140, height: 140, resizeMode: "cover" }}
          />
        </View>
        {/* Heading */}
        <Text style={styles.heading}>Masukkan kode unik yang kami kirim</Text>
        {/* Description */}
        <Text
          style={[styles.textAgreement, { marginTop: 18, marginBottom: 20 }]}
        >
          Silahkan periksa SMS kamu dan masukan kode unik yang kami kirimkan ke
          <Text style={{ fontFamily: "ProductSans-Medium" }}>
            {" "}
            081290112333
          </Text>
        </Text>
        {/* Input */}
        <Input title={"Kode Unik"} placeholder="Cth. q5TsgH***" />
        {/* Confirm */}
        <Text style={[styles.textAgreement, { marginTop: 8 }]}>
          Tidak menerima SMS ?{" "}
          <TouchableOpacity style={{ marginTop: -3 }}>
            <Text style={styles.textRed}>Kirim ulang</Text>
          </TouchableOpacity>{" "}
        </Text>
        {/* Button */}
        <View style={{ marginTop: -5 }}>
          <BigButton title={"VERIFIKASI"} screen="MainApp" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
  textAgreement: {
    fontFamily: "ProductSans-Regular",
  },
  textRed: {
    fontFamily: "ProductSans-Bold",
    color: "#EC2028",
  },
  heading: {
    fontFamily: "ProductSans-Bold",
    fontSize: 18,
  },
});
