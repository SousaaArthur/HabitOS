import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff", // Cor de fundo clara
  }, 
  header: {
    margin: 12,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentLevel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#27ae6050", 
    borderRadius: 20,
    padding: 5,
  }
});