import axios from "axios";
import react, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";
import { useNavigate } from "react-router-native";
import { getToken } from "../components/AsyncStorage";
import InputCustom from "../components/InputCustom";
import { Switch } from "@rneui/themed";
import CustomButton from "../components/CustomButton";
import FormValidation from "../components/validate";

export default function Acount() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [editable, setEditable] = useState(false);
  const [input, setinput] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    getToken().then((token) => {
      setToken(token);
    });
  }, []);

  useEffect(() => {
    setError(FormValidation(input));
  }, [input]);

  useEffect(() => {
    token &&
      axios
        .get(`http://localhost:8000/api/user-profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((e) => {
          setUser(e.data.data);
        })
        .catch((e) => console.error(e));
  }, [token]);

  const handleClick = () => {
    axios
      .put(`http://localhost:8000/api/update`, input, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((e) => {
        if (e.data.status === 1) {
          setUser(e.data.data);
          setEditable(false);
        }
        alert(e.data.msg);
      })
      .catch((e) => console.error(e));
  };

  if (user) {
    return (
      <SafeAreaView style={styles.view}>
        <View style={styles.header}>
          <Text style={styles.title}>Perfil</Text>
          <Button
            title="Cerrar sesion"
            color={"#C70039"}
            onPress={() => navigate("/")}
          />
        </View>
        <View style={[styles.container]}>
          <InputCustom
            label={"Email"}
            name={"email"}
            text={user.email}
            editable={editable}
            setinput={setinput}
          />
          {error.email && <Text style={styles.error}>{error.email}</Text>}

          <InputCustom
            label={"Name"}
            name={"name"}
            text={user.name}
            editable={editable}
            setinput={setinput}
          />
          {error.name && <Text style={styles.error}>{error.name}</Text>}

          <View style={styles.switchContainer}>
            <Text style={styles.editable}>Editable</Text>
            <Switch
              color="#FFC300"
              value={editable}
              onValueChange={(value) => setEditable(value)}
            />
          </View>
          {editable && (
            <CustomButton
              text={"Cuardar Cambios"}
              colorb={"#58D68D"}
              disabled={Object.entries(error).length === 0 ? false : true}
              styleCustom={{ width: "100%" }}
              onPress={handleClick}
            />
          )}
        </View>
      </SafeAreaView>
    );
  } else {
    return <Text>Loading</Text>;
  }
}

const styles = new StyleSheet.create({
  view: { flex: 1, width: "100%", padding: 20, alignItems: "center" },
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
  editable: {
    color: "#85929E",
    fontSize: 15,
    marginRight: 5,
  },
  header: {
    width: "80%",
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  switchContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});
