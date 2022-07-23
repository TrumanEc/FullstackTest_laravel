import react, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import CustomButton from "../components/CustomButton";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton text="Iniciar sesión" colorb="#7bbc4d" to={"/singin"} />
      <CustomButton text="Registrarse" colorb="dodgerblue" to={"/register"} />
    </SafeAreaView>
  );
}

const styles = new StyleSheet.create({});
