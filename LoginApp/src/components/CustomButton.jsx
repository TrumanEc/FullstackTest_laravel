import react from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigate } from "react-router-native";
export default function CustomButton({
  text,
  onPress,
  colorb,
  to,
  styleCustom,
  disabled = false,
}) {
  const navigate = useNavigate();
  const handlePress = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          ...styleCustom,
          backgroundColor: disabled === true ? "#cccc" : colorb,
        },
      ]}
      onPress={onPress ? onPress : handlePress}
      disabled={disabled}
    >
      <Text style={styles.appButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = new StyleSheet.create({
  button: {
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
