import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fafafa", // Cor de fundo clara
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
    backgroundColor: "#8A2BE250", 
    borderRadius: 20,
    padding: 5,
  }
});