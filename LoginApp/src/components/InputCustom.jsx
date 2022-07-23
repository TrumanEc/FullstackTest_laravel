import react from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const InputCustom = ({ label, text, editable = true, setinput, name }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.boxInput]}>
        <TextInput
          style={[styles.input, editable || { color: "#cccc" }]}
          defaultValue={text || ""}
          editable={editable}
          secureTextEntry={
            name === "password" || name === "password_confirmation"
              ? true
              : false
          }
          onChangeText={(e) =>
            setinput((prev) => {
              return { ...prev, [name]: e };
            })
          }
        />
      </View>
    </>
  );
};

const styles = new StyleSheet.create({
  boxInput: {
    width: "100%",
    borderColor: "#bbbb",
    borderWidth: 2,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    width: "90%",
    paddingHorizontal: 4,
    textAlign: "center",
    paddingVertical: 10,
  },
  label: {
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontSize: 16,
    color: "dodgerblue",
  },
});

export default InputCustom;
