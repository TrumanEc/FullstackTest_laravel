import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-native";
import FormValidation from "../components/validate";
import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";
import InputCustom from "../components/InputCustom";
import CustomButton from "../components/CustomButton";

export default function Acount() {
  const navigate = useNavigate();
  const [input, setinput] = useState({});
  const [error, seterror] = useState({});

  useEffect(() => {
    seterror(FormValidation(input));
  }, [input]);

  const handleClick = () => {
    axios.post(`http://localhost:8000/api/register`, input).then((e) => {
      alert(`${e.data.msg}`);
      navigate(`/`);
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        padding: 20,
        alignItems: "center",
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Registrarse</Text>
        <Button
          title="Ir a inicio"
          color={"#C70039"}
          onPress={() => navigate("/")}
        />
      </View>

      <View style={[styles.container]}>
        <InputCustom name={"name"} label={"Name"} setinput={setinput} />
        {error.name && <Text style={styles.error}>{error?.name}</Text>}
        <InputCustom name={"email"} label={"Email"} setinput={setinput} />
        {error.email && <Text style={styles.error}>{error.email}</Text>}
        <InputCustom name={"password"} label={"password"} setinput={setinput} />
        {error.password && <Text style={styles.error}>{error.password}</Text>}
        <InputCustom
          name={"password_confirmation"}
          label={"Confirmation"}
          setinput={setinput}
        />
        {error.password_confirmation && (
          <Text style={styles.error}>{error.password_confirmation}</Text>
        )}
      </View>
      {Object.entries(input).length > 3 && (
        <CustomButton
          text="Registrarse"
          onPress={handleClick}
          colorb={"#2ECC71"}
          disabled={Object.entries(error).length === 0 ? false : true}
        />
      )}
    </SafeAreaView>
  );
}

const styles = new StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    marginVertical: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  header: {
    width: "80%",
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  error: {
    color: "#CB4535",
    fontSize: 11,
    alignSelf: "flex-end",
    position: "relative",
    textAlign: "right",
  },
});
