import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff"
  }, 
  header: {
    margin: 12,
    padding: 10,
    gap: 20,
    flexDirection: "row",
    alignItems: 'center'
  },
  textColor: {
    textAlign: "center",
    color: "#696969",
    margin: 2
  }
})