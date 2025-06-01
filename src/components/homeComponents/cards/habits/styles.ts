import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    gap: 10,
  },
  shadow: {
    borderRadius: 5,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 4,
  },
  cardContainer: {
    padding: 10,
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    height: 18,
    width: 18,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  }
})