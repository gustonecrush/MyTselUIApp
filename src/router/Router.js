import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Verification from "../screens/Verification";
import Home from "../screens/Home";
import Riwayat from "../screens/Riwayat";
import Bantuan from "../screens/Bantuan";
import Inbox from "../screens/Inbox";
import AkunSaya from "../screens/AkunSaya";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNavigator from "../components/BottomNavigator";
import InternetPackage from "../screens/InternetPackage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = ({ route }) => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Bantuan"
        component={Bantuan}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Akun Saya"
        component={AkunSaya}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="InternetPackage" component={InternetPackage} />
    </Stack.Navigator>
  );
};

export default Router;
