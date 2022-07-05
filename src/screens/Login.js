import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import BigButton from "../components/BigButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SocialMediaButton from "../components/SocialMediaButton";
import Input from "../components/Input";

const Login = () => {
  const [loaded] = useFonts({
    "ProductSans-Medium": require("../../assets/fonts/ProductSans-Medium.ttf"),
    "ProductSans-Bold": require("../../assets/fonts/ProductSans-Bold.ttf"),
    "ProductSans-Regular": require("../../assets/fonts/ProductSans-Regular.ttf"),
  });

  if (!loaded) return false;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* Status Bar */}
      <StatusBar hidden={false} />
      <View style={{ marginHorizontal: 25 }}>
        {/* Illustration */}
        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/images/image-1.png")}
            style={{ width: 140, height: 140, resizeMode: "cover" }}
          />
        </View>
        {/* Heading */}
        <Text style={styles.heading}>
          Silahkan masuk dengan nomor {"\n"}
          telkomsel kamu
        </Text>
        {/* Form */}
        <View style={styles.formContainer}>
          <Input title="Nomor HP" placeholder={"Cth. 08129011xxxx"} />
          <View style={styles.checkContainer}>
            <MaterialCommunityIcons
              name="checkbox-marked"
              size={20}
              color="#EC2028"
            />
            <Text style={styles.textAgreement}>
              Saya menyetujui <Text style={styles.textRed}>syarat</Text>,{" "}
              <Text style={styles.textRed}>ketentuan</Text>, dan{" "}
              <Text style={styles.textRed}>privasi</Text> Telkomsel
            </Text>
          </View>
          <BigButton title={"LANJUT"} screen="Verification" />
          <Text
            style={{
              fontFamily: "ProductSans-Medium",
              fontSize: 15,
              color: "#747D8C",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Atau masuk menggunakan
          </Text>
          <SocialMediaButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
  heading: {
    fontFamily: "ProductSans-Bold",
    fontSize: 18,
  },
  formContainer: {
    marginTop: 20,
  },

  checkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textAgreement: {
    fontFamily: "ProductSans-Regular",
  },
  textRed: {
    fontFamily: "ProductSans-Bold",
    color: "#EC2028",
  },
});
