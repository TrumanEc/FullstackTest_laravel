import { StatusBar } from "expo-status-bar";
import { Switch, Route, NativeRouter, Routes } from "react-router-native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./Home.js";
import Acount from "./Acount.js";
import SingIn from "./SingIn.js";
import Register from "./Register.js";
export default function Main() {
  return (
    <View style={styles.container}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/singin" element={<SingIn />} />
        <Route exact path="/acount" element={<Acount />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
