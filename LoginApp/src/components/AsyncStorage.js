import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (value) => {
  try {
    await AsyncStorage.setItem("token", value);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    console.log(value);
    return value;
  } catch (e) {
    alert("no se encuetra el token");
  }
};
