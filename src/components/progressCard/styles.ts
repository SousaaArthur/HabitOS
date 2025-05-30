import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardProgress: {
    padding: 25,
    margin: 12,
    borderRadius: 10,
    gap: 10,
  },
  progressContainerText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainText: {
    color: "#fafafa", // Cor roxa
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 16,
    color: "#fafafa99",
    marginTop: 5,
  },
  progressBar: {
    height: 20,
    borderRadius: 50,
    backgroundColor: "#fafafa60",
    overflow: "hidden",
    marginTop: 10,
  }
});