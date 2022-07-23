import react, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { useNavigate } from "react-router-native";
import InputCustom from "../components/InputCustom";
import FormValidation from "../components/validate";
import { storeToken } from "../components/AsyncStorage";

export default function SingIn() {
  const [user, setUser] = useState({});
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    seterror(FormValidation({ email: user.email }));
  }, [user]);

  const handleSingIn = () => {
    axios.post("http://localhost:8000/api/login", user).then((d) => {
      const response = d.data;
      if (response.status === 1) {
        alert(response.msg);
        storeToken(response.acces_token);
        navigate(`/acount`);
      } else alert(response.msg);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <InputCustom label={"Email"} setinput={setUser} name={"email"} />
        {error.email && <Text style={styles.error}>{error.email}</Text>}
        <InputCustom label={"Password"} setinput={setUser} name={"password"} />

        <View>
          <CustomButton
            text="Iniciar"
            onPress={handleSingIn}
            colorb={"dodgerblue"}
          />
          <Button
            title="Ir a inicio"
            color={"#C70039"}
            onPress={() => navigate("/")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 30,
  },
  box: {
    width: "90%",
    shadowColor: "#000",
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 20,
  },
  error: {
    color: "#CB4535",
    fontSize: 11,
    alignSelf: "flex-end",
    position: "relative",
  },
});
